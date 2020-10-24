const Queue = require('../src/queue');

describe(`queue`, function() {
  var queue;

  beforeEach(function() {
    queue = new Queue();
  });

  it('returns a size of zero for a new queue', function() {
    expect(queue.size()).toEqual(0);
  });

  it('returns a size of 2 after adding two items', function() {
    queue.enqueue('a');
    queue.enqueue('b');
    expect(queue.size()).toEqual(2);
  });

  it('does not throw error when removing from an empty queue', function() {
    expect(function() {
      queue.dequeue();
    }).not.toThrow();
  });

  it('returns a size of 1 after adding two items and removing one', function() {
    queue.enqueue('a');
    queue.enqueue('b');
    queue.dequeue();
    expect(queue.size()).toEqual(1);
  });

  it('returns a size of 0 after removing more items than were added', function() {
    queue.enqueue('a');
    queue.dequeue();
    queue.dequeue();
    expect(queue.size()).toEqual(0);
  });

  it('allows sequentially adding and removing items', function() {
    queue.enqueue('a');
    expect(queue.dequeue()).toEqual('a');
    queue.enqueue('b');
    expect(queue.dequeue()).toEqual('b');
  });

  it('removes the least recently added of two items', function() {
    queue.enqueue('a');
    queue.enqueue('b');
    expect(queue.dequeue()).toEqual('a');
  });

  it('removes the oldest item, after newer items have already been added and removed', function() {
    queue.enqueue('a');
    queue.enqueue('b');
    queue.dequeue();
    queue.enqueue('c');
    expect(queue.dequeue()).toEqual('b');
  });
});
