import drawStylishDiff from './stylish.js';

const formats = {
  stylish: drawStylishDiff,
};

export default (diff, format) => {
  const output = formats[format];
  return output(diff);
};
