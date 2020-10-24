const Stack = require('../src/stack');

describe(`stack`, function() {
  let stack;

  beforeEach(function() {
    stack = new Stack();
  });

  it('returns a size of zero for a new stack', function() {
    expect(stack.size()).toEqual(0);
  });

  it('returns a size of 2 after adding two items', function() {
    stack.push('a');
    stack.push('b');
    expect(stack.size()).toEqual(2);
  });

  it('does not throw error when removing from an empty stack', function() {
    expect(function() {
      stack.pop();
    }).not.toThrow();
  });

  it('returns a size of 1 after adding two items and removing one', function() {
    stack.push('a');
    stack.push('b');
    stack.pop();
    expect(stack.size()).toEqual(1);
  });

  it('returns a size of 0 after removing more items than were added', function() {
    stack.push('a');
    stack.pop();
    stack.pop();
    expect(stack.size()).toEqual(0);
  });

  it('allows sequentially adding and removing items', function() {
    stack.push('a');
    expect(stack.pop()).toEqual('a');
    stack.push('b');
    expect(stack.pop()).toEqual('b');
  });

  it('removes the most recently added of two items', function() {
    stack.push('a');
    stack.push('b');
    expect(stack.pop()).toEqual('b');
  });

  it('removes the newest item, after newer items have already been added and removed', function() {
    stack.push('a');
    stack.push('b');
    stack.push('c');
    stack.pop();
    expect(stack.pop()).toEqual('b');
  });
});
