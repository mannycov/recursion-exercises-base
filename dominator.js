const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  const flattenedTree = flattenTreeToArray(root);
  for (let i = 0; i < flattenedTree.length; i++) {
    if (flattenedTree[i].id === id) {
      return flattenedTree[i];
    }
  }
};

const getElementsByClassName = function(root, className) {
  const flattenedTree = flattenTreeToArray(root);
  return _.filter(flattenedTree, el => el.className === className);
};
  
const getElementsByTagName = function(root, tagName) {
  const flattenedTree = flattenTreeToArray(root);
  return _.filter(flattenedTree, el => el.tagName === tagName);
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
