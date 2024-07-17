import { TreeNode } from './Node';

class Tree {
  root?: TreeNode;

  // 노드 탐색
  findNode(value: number, targetNode?: TreeNode): TreeNode | undefined {
    // 루트 노드가 없을 경우 undefined 반환
    const rootNode = targetNode ?? this.root;

    if (!rootNode) return undefined;

    // 현재 노드의 값과 찾고자 하는 값이 일치할 경우 현재 노드 반환
    if (value === rootNode.value) return rootNode;

    // 현재 노드의 자식 노드들을 순회하며 재귀적으로 탐색
    for (const child of rootNode.children) {
      const result = this.findNode(value, child);
      if (result) return result;
    }
    return undefined;
  }

  // 노드 추가
  addNode(value: number, parentValue?: number) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    const parent = parentValue ? this.findNode(parentValue) : null;

    if (parent) {
      parent.children.push(newNode);
      newNode.parent = parent;
    } else {
      console.log('404');
    }
  }

  // 노드 삭제
  deleteNode(value: number) {
    const deleteNode = this.findNode(value);

    if (!deleteNode) {
      console.log('404');
      return;
    }

    if (deleteNode === this.root) {
      this.root = undefined;
      return;
    }

    const parent = deleteNode.parent ?? undefined;
    if (parent) {
      parent.children = parent.children.filter((child) => child !== deleteNode);
    }
    deleteNode.children = [];
  }

  getParentNode() {}
  getLeafNode() {}
  preOrder() {}
  inOrder() {}
  postOrder() {}
  levelOrder() {}
}

const tree = new Tree();
