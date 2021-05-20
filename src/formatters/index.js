import drawStylishDiff from './stylish.js';
import drawPlainDiff from './plain.js';
import convertToJSON from './json.js';

const formats = {
  stylish: drawStylishDiff,
  plain: drawPlainDiff,
  json: convertToJSON,
};

export default (diff, format) => {
  const output = formats[format];
  return output(diff);
};
