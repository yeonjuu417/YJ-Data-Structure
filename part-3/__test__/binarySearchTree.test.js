const BinarySearchTreeNode = require('../src/binarySearchTree');

describe('binarySearchTree', function() {
  var rootNode;

  beforeEach(function() {
    rootNode = new BinarySearchTreeNode(5);
  });

  it('should have methods named "insert", "contains", and "inorder', function() {
    expect(rootNode).toHaveProperty('insert');
    expect(rootNode).toHaveProperty('contains');
    expect(rootNode).toHaveProperty('inorder');
  });

  it('should insert values at the correct location in the tree', function() {
    rootNode.insert(2);
    rootNode.insert(3);
    rootNode.insert(7);
    rootNode.insert(6);
    expect(rootNode.left.right.value).toEqual(3);
    expect(rootNode.right.left.value).toEqual(6);
  });

  it('should have a working "contains" method', function() {
    rootNode.insert(2);
    rootNode.insert(3);
    rootNode.insert(7);
    expect(rootNode.contains(7)).toEqual(true);
    expect(rootNode.contains(8)).toEqual(false);
  });

  it('should execute a callback on every value in a tree using "inorder"', function() {
    var array = [];
    var func = function(value) {
      array.push(value);
    };
    rootNode.insert(2);
    rootNode.insert(3);
    rootNode.insert(8);
    rootNode.insert(6);
    rootNode.insert(10);
    rootNode.inorder(func);
    expect(array).toEqual([2, 3, 5, 6, 8, 10]);
  });
});
