import { TNode } from './Node';

class Tree {
  root?: TNode;

  // 노드 탐색
  findNode(value: number, targetNode?: TNode): TNode | undefined {
    // 루트 노드가 없을 경우 undefined 반환
    const rootNode = targetNode ?? this.root;

    if (!rootNode) {
      this.printNotFound();
      return undefined;
    }

    // 현재 노드의 값과 찾고자 하는 값이 일치할 경우 현재 노드 반환
    if (value === rootNode.value) return rootNode;

    // 현재 노드의 자식 노드들을 순회하며 재귀적으로 탐색
    for (const child of rootNode.children) {
      const result = this.findNode(value, child);
      if (result) return result;
    }

    this.printNotFound();
    return undefined;
  }

  // 노드 추가
  addNode(value: number, parentValue?: number) {
    const newNode = new TNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    const parent = parentValue ? this.findNode(parentValue) : null;

    if (parent) {
      parent.children.push(newNode);
      newNode.parent = parent;
    } else {
      this.printNotFound();
    }
  }

  // 노드 삭제
  deleteNode(value: number) {
    const deleteNode = this.findNode(value);

    if (!deleteNode) {
      this.printNotFound();
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

  // 부모노드 탐색
  getParentNode(value: number): TNode | undefined {
    const targetNode = this.findNode(value);
    if (!targetNode || targetNode.parent) {
      this.printNotFound();
      return undefined;
    }

    return targetNode.parent;
  }

  // 노드를 찾지 못함
  private printNotFound() {
    console.log('non found');
  }
}

const tree = new Tree();
