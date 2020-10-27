/* Undirected Graph */
class Graph {
  constructor() {
    /*
     *  ex)
     *    nodes = {
     *      0: [ 1, 2 ],
     *      1: [ 0 ],
     *      2: [ 0 ]
     *    }
     */
    this.nodes = {};
  }

  addNode(node) {
    this.nodes[node] = [];//키를 추가 하면 빈배열이 값으로 함께 
  }

  contains(node) {
    return this.nodes.hasOwnProperty(node);
  }

  removeNode(node) {
    for(let el of this.nodes[node]){
      this.removeEdge(node,el);
    }
    delete this.nodes[node];
  }

  hasEdge(fromNode, toNode) {
    for (let el of this.nodes[fromNode]){
      if(el === toNode){
        return true;
      }
    }
    return false;
  }

  addEdge(fromNode, toNode) {
    this.nodes[fromNode].push(toNode);
    this.nodes[toNode].push(fromNode);
    
  }

  removeEdge(fromNode, toNode) {
    this.nodes[fromNode].splice(this.nodes[fromNode].indexOf(toNode),1);
    this.nodes[toNode].splice(this.nodes[toNode].indexOf(fromNode),1);
    
  }
}

module.exports = Graph;
