
const visitAllNodes = function(node, callback) {
  callback(node);
  if (node.childNodes.length === 0) {
    return;
  }
    node.childNodes.forEach(childNode => visitAllNodes(childNode, callback)); 
};

const flattenTreeToArray = function(node) {
  const arr = [];
  visitAllNodes(node, function() {
    arr.push(node)
  });
  return arr;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};