import _ from 'lodash';

const transformValue = (value) => {
  if (!_.isObject(value)) {
    if (typeof value === 'string') {
      return `'${value}'`;
    }
    if (String(value).length === 0) {
      return '';
    }
    return value;
  }

  return '[complex value]';
};

const drawPlainDiff = (diff) => {
  // eslint-disable-next-line consistent-return
  const iter = (node, acc) => {
    const {
      key,
      value,
      type,
      preValue,
      curValue,
      children,
    } = node;
    switch (type) {
      case 'added':
        return `Property '${[...acc, key].join('.')}' was added with value: ${transformValue(value)}`;
      case 'removed':
        return `Property '${[...acc, key].join('.')}' was removed`;
      case 'changed':
        return `Property '${[...acc, key].join('.')}' was updated. From ${transformValue(preValue)} to ${transformValue(curValue)}`;
      case 'root':
        return children.flatMap((child) => iter(child, acc));
      case 'nested':
        return children.flatMap((child) => iter(child, [...acc, key]));
      default:
        break;
    }
  };

  const result = iter(diff, []);
  return result.filter((str) => str).join('\n');
};

export default drawPlainDiff;
