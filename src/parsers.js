import yaml from 'js-yaml';

const extensions = {
  yaml: yaml.load,
  yml: yaml.load,
  json: JSON.parse,
};

export default (file, extension) => {
  const parse = extensions[extension];
  return parse(file);
};
