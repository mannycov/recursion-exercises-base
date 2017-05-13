
const visitAllNodes = function(node, callback) {
  callback(node);
  if (node.childNodes.length === 0) {
    return;
  } else if (node.childNodes.length > 0) {
      node.childNodes.forEach(childNode => visitAllNodes(childNode, callback));
  } 
};

const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()
  return visitAllNodes(node);
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};