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
  for (let i = 0; i < flattenedTree.length; i++) {
    if (_.indexof(flattenedTree[i].className) === className) {
      return flattenedTree[i];
    }
  }
};



const getElementsByTagName = function(root, tagName) {
  const flattenedTree = flattenTreeToArray(root);
  for (let i = 0; i < flattenedTree.length; i++) {
    if (flattenedTree[i].tagName === tagName) {
      return flattenedTree[i];
    }
  }
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
