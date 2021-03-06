import fs from 'fs';
import path from 'path';
import process from 'process';
import parse from './parsers.js';
import buildDiff from './buildDiff.js';
import formatter from './formatters/index.js';

const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');

const normalizePath = (filepath) => path.resolve(process.cwd(), filepath);

const getFileExtension = (filepath) => path.extname(filepath).slice(1);

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const file1 = readFile(normalizePath(filepath1));
  const file2 = readFile(normalizePath(filepath2));

  const file1Extname = getFileExtension(filepath1);
  const file2Extname = getFileExtension(filepath2);

  const parsedFile1 = parse(file1, file1Extname);
  const parsedFile2 = parse(file2, file2Extname);

  const diff = buildDiff(parsedFile1, parsedFile2);

  return formatter(diff, format);
};

export default genDiff;
