const LinkedList = require('../src/linkedList');

describe('linkedList', function () {
  let linkedList;

  beforeEach(function () {
    linkedList = new LinkedList();
  });

  it('should have required methods', function () {
    expect(linkedList).toHaveProperty('addToTail');
    expect(linkedList).toHaveProperty('remove');
    expect(linkedList).toHaveProperty('getNodeAt');
    expect(linkedList).toHaveProperty('contains');
    expect(linkedList).toHaveProperty('indexOf');
    expect(linkedList).toHaveProperty('size');
  });

  it('should add a new node to tail', function () {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    const secondNode = linkedList.head.next;
    expect(linkedList.head.value).toEqual(4);
    expect(secondNode && secondNode.value).toEqual(5);
  });

  it('should remove the node from the list', function () {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    expect(linkedList.head.value).toEqual(4);
    linkedList.remove(4);
    const secondNode = linkedList.head.next;
    expect(linkedList.head.value).toEqual(5);
    expect(secondNode && secondNode.value).toEqual(6);
  });

  it('should return the value of the given index in the list', function () {
    linkedList.addToTail(10);
    linkedList.addToTail(20);
    linkedList.addToTail(30);
    expect(linkedList.getNodeAt(1).value).toEqual(20);
  });

  it('should return undefined if the value does not exist', function () {
    linkedList.addToTail(10);
    linkedList.addToTail(20);
    linkedList.addToTail(30);
    expect(linkedList.getNodeAt(10)).toEqual(undefined);
  });

  it('should contain a value that was added', function () {
    linkedList.addToTail(4);
    linkedList.addToTail(8);
    linkedList.addToTail(12);
    expect(linkedList.contains(4)).toEqual(true);
    expect(linkedList.contains(8)).toEqual(true);
    expect(linkedList.contains(13)).toEqual(false);
  });

  it('should not contain a value that was removed', function () {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.remove(4);
    expect(linkedList.contains(4)).toEqual(false);
  });

  it('should return the index of value in the list', function () {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    expect(linkedList.indexOf(6)).toEqual(2);
  });

  it('should return -1 if the value does not exist', function () {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    expect(linkedList.indexOf(7)).toEqual(-1);
  });

  it('should return the size of list', function () {
    linkedList.addToTail(5);
    linkedList.addToTail(6);
    linkedList.addToTail(7);
    linkedList.addToTail(8);
    linkedList.remove(7);
    expect(linkedList.size()).toEqual(3);
  });
});
