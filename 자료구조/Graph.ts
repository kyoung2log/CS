import { Node } from './Node';

class Graph {
  // 모든 노드 저장
  nodes: Node[] = [];
  // 노드를 인접리스트로 저장, 인덱스 시그니쳐
  adjacencyList: { [key: number]: Node[] } = {};
  // adjacencyMatrix

  // 노드 추가
  addNode(node: Node) {
    this.nodes.push(node);
    this.adjacencyList[node.value] = [];

    this.printNodes();
  }

  // 엣지 추가
  addEdge(node1: Node, node2: Node, weight = null) {
    this.adjacencyList[node1.value].push(node2);
    this.adjacencyList[node2.value].push(node1);

    this.printEdges();
  }

  // 노드 삭제
  deleteNode(node: Node) {
    // 해당 노드 삭제
    this.nodes = this.nodes.filter((n) => n.value !== node.value);

    // 인접리스트에서 삭제
    delete this.adjacencyList[node.value];
    Object.keys(this.adjacencyList).forEach((key) => {
      this.adjacencyList[key] = this.adjacencyList[key].filter(
        (n: Node) => n.value !== node.value
      );
    });

    this.printNodes();
  }

  // 엣지 삭제
  deleteEdge(node1: Node, node2: Node) {
    this.adjacencyList[node1.value] = this.adjacencyList[node1.value].filter(
      (n: Node) => n.value !== node2.value
    );
    this.adjacencyList[node2.value] = this.adjacencyList[node2.value].filter(
      (n: Node) => n.value !== node1.value
    );

    this.printEdges();
  }

  // 그래프 순회
  bfs(startNode: Node) {}
  dfs(startNode: Node) {}

  private printNodes() {
    console.log(this.nodes);
  }

  private printEdges() {
    console.log(this.adjacencyList);
  }
}

const graph = new Graph();
