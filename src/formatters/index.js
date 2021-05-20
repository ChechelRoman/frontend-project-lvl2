import drawStylishDiff from './stylish.js';
import drawPlainDiff from './plain.js';

const formats = {
  stylish: drawStylishDiff,
  plain: drawPlainDiff,
};

export default (diff, format) => {
  const output = formats[format];
  return output(diff);
};
