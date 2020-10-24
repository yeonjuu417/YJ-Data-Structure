class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  addToTail(value) {//노드 추가 
    const node = new Node(value); //인스턴스추가
    if(this.head === null){
      this.head = node;
      this.tail = node;
    }else{
      this.tail.next = node;
      this.tail = node;
    }

    this._size++;
    return this;
  }

  remove(value) {//노드 삭제 
    let curr = this.head;
    let prev = this.head;
    if(this.head.value === value){
      this.head = this.head.next;
    }else{
      while(curr.value !== value){
        curr = curr.next;
      }
      prev.next = curr.next;
    }
    this._size--;
  }

  getNodeAt(index) {// 인덱스 입력하면 노드 리턴 
    let count = 0;
    let node = this.head;
    while(count !== index){
      count ++;
      node = node.next;
      if(index > this._size){
        return undefined;
      }
    }
    return node;
  }

  contains(value) {
    let count = 0;
    let node = this.head;
    while(node.value !== value){
      count ++;
      node = node.next;
      if(this._size <= count){
        return false;
      }
    }
    return true;
  }

  indexOf(value) {
    let count = 0;
    let node = this.head;
    while(node.value !== value){
      count ++;
      node = node.next;
      if(this._size <= count){
        return -1;
      }
    }
    return count;
  }

  size() {
    return this._size;
  }
}

module.exports = LinkedList;
