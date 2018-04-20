import _ from 'lodash';

export default function(errors) {
  const result = {};
  _.forEach(erros, (value, key) => {
    result[key] = val.message;
  });
  return result;
}
