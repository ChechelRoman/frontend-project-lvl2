import fs from 'fs';
import path from 'path';
import process from 'process';
import parser from './parsers.js';
import buildDiff from './buildDiff.js';

const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');
const normalizePath = (filepath) => path.resolve(process.cwd(), filepath);
const getFileExtension = (filepath) => path.extname(filepath).slice(1);

const genDiff = (filepath1, filepath2) => {
  const file1 = readFile(normalizePath(filepath1));
  const file2 = readFile(normalizePath(filepath2));
  const file1Extname = getFileExtension(filepath1);
  const file2Extname = getFileExtension(filepath2);
  const parsedFile1 = parser(file1, file1Extname);
  const parsedFile2 = parser(file2, file2Extname);

  return buildDiff(parsedFile1, parsedFile2);
};

export default genDiff;
