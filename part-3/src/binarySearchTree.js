class BinarySearchTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
//{value : ,left: , right: }
  insert(value) {
    if(value < this.value){
      if(this.left === null){
        this.left = new BinarySearchTreeNode(value);
      }else{
        this.left.insert(value);
      }
    }else if(value > this.value){
      if(this.right === null){
        this.right = new BinarySearchTreeNode(value);
      }else{
        this.right.insert(value);
      }
    }
  }

  contains(value) {
    if(value === this.value){
      return true;
    }else if(value < this.value){
      if(this.left === null){
        return false;
      }else if(this.left.contains(value)){
          return true;
      }
    }else if(value > this.value){
      if(this.right === null){
        return false;
      }else if(this.right.contains(value)){
          return true;
      }
    }
    return false;
  }

  inorder(callback) {
    if(this.left !== null){
      this.left.inorder(callback);
    }
    callback(this.value);
    if(this.right !== null){
      this.right.inorder(callback);
    }
  }
}

module.exports = BinarySearchTreeNode;
