
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
  
  it('should dequeue', function(){
    queue
      .enqueue(1)
      .dequeue();

    queue.should.eql({ head: undefined });
  });
});