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
    this.nodes[node] = this.nodes[node] || [];
  }

  contains(node) {}

  removeNode(node) {}

  hasEdge(fromNode, toNode) {}

  addEdge(fromNode, toNode) {}

  removeEdge(fromNode, toNode) {}
}

module.exports = Graph;
