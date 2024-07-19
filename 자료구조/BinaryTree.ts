import { BTNode } from './Node';

class BinaryTree {
  root?: BTNode;

  // 노드 추가
  addNode(value: number) {
    const newNode = new BTNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let targetNode = this.root;

    while (targetNode) {
      if (value < targetNode.value) {
        if (!targetNode.left) {
          targetNode.left = newNode;
          return;
        }
        targetNode = targetNode.left;
      } else {
        if (!targetNode.right) {
          targetNode.right = newNode;
          return;
        }
        targetNode = targetNode.right;
      }
    }
  }

  // 노드 찾기
  findNode(value: number, node?: BTNode) {
    if (!node) return undefined;

    if (value === node.value) return node;

    if (value < node.value) {
      return this.findNode(value, node.left);
    } else {
      return this.findNode(value, node.right);
    }
  }

  // 노드 삭제
  deleteNode(value: number, node?: BTNode) {
    if (!node) return undefined;

    if (value < node.value) {
      node.left = this.deleteNode(value, node.left);
      return node;
    } else if (value > node.value) {
      node.right = this.deleteNode(value, node.right);
      return node;
    } else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;
    }
  }

  // 최소값 찾기
  findMin(): BTNode | undefined {
    let node = this.root;
    if (!node) return;

    while (node.left) {
      node = node.left;
    }

    console.log(`${node.value} is MIN`);
    return node;
  }

  // 최대값 찾기
  findMax(): BTNode | undefined {
    let node = this.root;
    if (!node) return;

    while (node.right) {
      node = node.right;
    }

    console.log(`${node.value} is MAX`);
    return node;
  }

  // 전위 순회
  preOrder(node?: BTNode) {
    if (!node) return;

    console.log(node.value);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }

  // 중위 순회
  inOrder(node?: BTNode) {
    if (!node) return;

    this.inOrder(node.left);
    console.log(node.value);
    this.inOrder(node.right);
  }

  // 후위 순회
  postOrder(node?: BTNode) {
    if (!node) return;

    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.value);
  }

  // 부모노드 탐색
  getParentNode(value: number): BTNode | undefined {
    const targetNode = this.findNode(value);

    if (!targetNode || targetNode.parent) {
      return undefined;
    }

    return targetNode.parent;
  }

  // 리프노드 탐색
  getLeafNode(value: number): BTNode[] | undefined {
    const targetNode = this.findNode(value);

    if (!targetNode) return;

    const leafNode: BTNode[] = [];

    const findLeaves = (node: BTNode | undefined) => {
      if (!node) return;
      if (!node.left && !node.right) {
        leafNode.push(node); // 왼쪽, 오른쪽 자식노드가 없으면 리프노드이므로 push
      } else {
        findLeaves(node.left);
        findLeaves(node.right);
      }
    };

    findLeaves(targetNode);

    return leafNode;
  }
}

const binaryTree = new BinaryTree();
binaryTree.addNode(4);
binaryTree.addNode(5);
binaryTree.addNode(7);
binaryTree.addNode(2);
binaryTree.addNode(3);
binaryTree.addNode(1);
binaryTree.findMax();
console.log(binaryTree.root);
