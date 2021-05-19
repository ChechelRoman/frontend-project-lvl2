import _ from 'lodash';

const indent = ' ';
const indentLength = 4;

const drawIndent = (size) => indent.repeat(size);

const unfoldChildren = (value, depth) => {
  if (!_.isObject(value)) {
    return value;
  }
  const keys = Object.keys(value);
  const result = keys
    .map((key) => `${drawIndent(indentLength * (depth + 1))}${key}: ${unfoldChildren(value[key], depth + 1)}`);
  return `{\n${result.join('\n')}\n${drawIndent(depth * indentLength)}}`;
};

const drawStylishDiff = (diff) => {
  // eslint-disable-next-line consistent-return
  const iter = (node, depth) => {
    const {
      key,
      type,
      value,
      children,
      preValue,
      curValue,
    } = node;
    switch (type) {
      case 'unchanged':
        return (`${drawIndent(depth * indentLength)}${key}: ${unfoldChildren(value, depth)}`);
      case 'added':
        return (`${drawIndent(indentLength * depth - 2)}+ ${key}: ${unfoldChildren(value, depth)}`);
      case 'removed':
        return `${drawIndent(indentLength * depth - 2)}- ${key}: ${unfoldChildren(value, depth)}`;
      case 'changed':
        return (`${drawIndent(indentLength * depth - 2)}- ${key}: ${unfoldChildren(preValue, depth)}\n${drawIndent(indentLength * depth - 2)}+ ${key}: ${unfoldChildren(curValue, depth)}`);
      case 'nested':
        return (`${drawIndent(depth * indentLength)}${key}: {\n${(children.map((child) => iter(child, depth + 1))).join('\n')}\n${drawIndent(indentLength * depth)}}`);
      case 'root':
        return (`{\n${children.map((child) => iter(child, depth + 1)).join('\n')}\n}`);
      default:
        break;
    }
  };

  return iter(diff, 0);
};

export default drawStylishDiff;
