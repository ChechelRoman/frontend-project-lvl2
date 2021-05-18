import _ from 'lodash';

const buildDiff = (file1, file2) => {
  const keys = _.union(Object.keys(file1), Object.keys(file2));
  const sortedKeys = _.sortBy(keys);
  const result = sortedKeys.map((key) => {
    const value1 = file1[key];
    const value2 = file2[key];
    if (!_.has(file1, key)) {
      return `  + ${key}: ${value2}`;
    }
    if (!_.has(file2, key)) {
      return `  - ${key}: ${value1}`;
    }
    if (_.get(file1, key) === _.get(file2, key)) {
      return [`    ${key}: ${value1}`];
    }
    return `  - ${key}: ${value1}\n  + ${key}: ${value2}`;
  }).flat(2);

  return `{\n${result.join('\n')}\n}`;
};

export default buildDiff;
