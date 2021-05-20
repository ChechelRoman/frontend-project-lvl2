import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');

test('gendiff stylish json', () => {
  expect(gendiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(readFile(getFixturePath('expectedStylish.txt')));
});

test('gendiff stylish yaml', () => {
  expect(gendiff(getFixturePath('file1.yaml'), getFixturePath('file2.yml'))).toEqual(readFile(getFixturePath('expectedStylish.txt')));
});

test('gendiff plain json', () => {
  expect(gendiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain')).toEqual(readFile(getFixturePath('expectedPlain.txt')));
});

test('gendiff plain yaml', () => {
  expect(gendiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain')).toEqual(readFile(getFixturePath('expectedPlain.txt')));
});
