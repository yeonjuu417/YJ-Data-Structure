class Stack {// 접시 쌓기 ! 
  constructor() {
    this.storage = {};
    this.top = 0;
  }

  size() {
    if(this.top < 0){
      return 0;
    }
    return this.top;
  }

  push(element) {
    this.storage[this.top] = element;
    this.top ++;
  }

  pop() {
    this.top --;
    const del = this.storage[this.top];
    delete this.storage[this.top];
    
    return del;
  }
}

module.exports = Stack;
