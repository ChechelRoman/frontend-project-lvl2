import _ from 'lodash';

const buildDiff = (file1, file2) => {
  const keys = _.union(Object.keys(file1), Object.keys(file2));
  const sortedKeys = _.sortBy(keys);
  const result = sortedKeys.map((key) => {
    const value1 = file1[key];
    const value2 = file2[key];
    if (!_.has(file1, key)) {
      return {
        key,
        value: value2,
        type: 'added',
      };
    }

    if (!_.has(file2, key)) {
      return {
        key,
        value: value1,
        type: 'removed',
      };
    }

    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return {
        key,
        children: buildDiff(value1, value2),
        type: 'nested',
      };
    }

    if (_.get(file1, key) === _.get(file2, key)) {
      return {
        key,
        value: value2,
        type: 'unchanged',
      };
    }

    return {
      key,
      preValue: value1,
      curValue: value2,
      type: 'changed',
    };
  });

  return result;
};

export default (file1, file2) => ({ type: 'root', children: buildDiff(file1, file2) });
