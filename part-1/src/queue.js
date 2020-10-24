class Queue {//선입선출이다. 놀이동산 !! 
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    const size = this.rear - this.front;
    if(size <= 0){
      return 0;
    }
    return size;
  }

  enqueue(element) { // 넣어주는거 
    this.storage[this.rear] = element;
    this.rear ++;
  }

  dequeue() { // 값이나가는거 
    let remove = this.storage[this.front];
    delete this.storage[this.front];
    this.front ++;
    return remove;
  }
}

module.exports = Queue;
