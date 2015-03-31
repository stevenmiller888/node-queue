
/**
 * Dependencies.
 */

var Node = require('./node');

/**
 * Expose `Queue`
 */

module.exports = Queue;

/**
 * Queue.
 */

function Queue(){
  var self = this;
  var args = [].slice.call(arguments);
  args.forEach(function(arg){
    self.add(arg);
  });
}

/**
 * Add the item to the end of the list.
 */

Queue.prototype.enqueue = function(val){
  var node = new Node();
  node.val = val;

  // empty list
  if (!this.head){
    node.val = val;
    this.head = node;
    return this;
  }
  
  // add to end of list
  var current = this.head;
  while (current.next) {
    current = current.next;
  }

  current.next = node;
  return this;
};

/**
 * Remove the item from the beginning of the list.
 */

Queue.prototype.dequeue = function(){
  var ret = this.head;
  this.head = this.head.next;
  return ret;
};

/**
 * Pretty print the queue.
 */

Queue.prototype.print = function(){
  var current = this.head;
  console.log(current.val);
  
  while (current.next) {
    console.log(current.next.val);
    current = current.next;
  }

  return this;
};
