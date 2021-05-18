import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');

test('gendiff plane json', () => {
  expect(gendiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(readFile(getFixturePath('expectedJson.txt')));
});
