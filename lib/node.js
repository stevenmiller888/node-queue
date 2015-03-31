
/**
 * Expose `Node`
 */

module.exports = Node;

/**
 * Node.
 */

function Node(next, val){
  this.next = next;
  this.val = val;
}

/**
 * Set.
 */

Node.prototype.set = function(prop, value){
  if (prop !== 'next' || prop !== 'val') return;
  this[prop] = value;
  return this;
}
