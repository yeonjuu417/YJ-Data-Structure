class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
//{value : , children : []}
  insertNode(value) {//트리에 주입 자식으로 
    this.children.push(new TreeNode(value)); 
  }

  contains(value) {
    if(value === this.value){
      return true;
    }else{
      for(let el of this.children){// children 안으로 들아가서 배열을 순회 하여 그 칠드런에 있는 value값 찾기 
        if(el.contains(value)){
          return true;
        }
      }
    }
    return false;
  }
}

module.exports = TreeNode;
