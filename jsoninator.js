const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...



const stringify = function(obj) {
  if (_.isString(obj)) {
    return "\"" + obj + "\"";
  } else if (_.isNumber(obj)) {
    return obj.toString();
  } else if (_.isArray(obj)) {
      if (_.isEmpty(obj)) {
        return '[]';
      }
        const items = _.map(obj, item => (_.isString(item)) ? stringify(item) : stringify(item));
        return '[' + items + ']';
  } else if (_.isBoolean(obj)) {
    return obj.toString();
  } else if (_.isNull(obj)) {
    return 'null';  
  } else if (_.isObject(obj)) {
    let items = '';
      if (_.isEmpty(obj)) {
        return '{}';
      }
      for (let key in obj) {
        items = stringify(key) + ':' + stringify(obj[key]);
      }
      return '{' + items + '}';
  }
};

module.exports = {
  stringify: stringify
};