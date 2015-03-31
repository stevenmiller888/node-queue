
/**
 * Dependencies.
 */

var Queue = require('..');
var should = require('should');
var assert = require('assert');
var queue;

/**
 * Tests.
 */

describe('queue', function(){
  beforeEach(function(){
    queue = new Queue();
  });

  it('should enqueue', function(){
    queue.enqueue(1);
    queue.should.eql({ head: { next: undefined, val: 1 } });
  });
  
  it('should dequeue by returning the first element', function(){
    queue.enqueue(1)
    var ret = queue.dequeue();
    ret.should.eql({ next: undefined, val: 1 });
    queue.should.eql({ head: undefined });
  });
});