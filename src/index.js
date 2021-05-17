import fs from 'fs';
import _ from 'lodash';
import path from 'path';
import process from 'process';

const readFile = (filepath) => fs.readFileSync(filepath);
const normalizePath = (filepath) => path.resolve(process.cwd(), filepath);

const genDiff = (filepath1, filepath2) => {
  const file1 = JSON.parse(readFile(normalizePath(filepath1)));
  const file2 = JSON.parse(readFile(normalizePath(filepath2)));

  const keys = _.sortBy(_.union(Object.keys(file1), Object.keys(file2)));
  const result = keys.map((key) => {
    const value1 = file1[key];
    const value2 = file2[key];
    if (!_.has(file1, key)) {
      return [` + ${key}: ${value2}`];
    }
    if (!_.has(file2, key)) {
      return [` - ${key}: ${value1}`];
    }
    if (_.get(file1, key) === _.get(file2, key)) {
      return [`   ${key}: ${value1}`];
    }
    return [[` - ${key}: ${value1}`], [` + ${key}: ${value2}`]];
  }).flat(2);

  return `{\n${result.join('\n')}\n}`;
};

export default genDiff;
