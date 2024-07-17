// ts에서 클래스는 타입으로 사용 가능.
// 즉 아래의 Node는 클래스이자 타입임
// export default는 dom의 Node와 중복되지 않기 위해 모듈화
export class Node {
  value: number;

  constructor(value: number) {
    this.value = value;
  }
}

export class TreeNode extends Node {
  children: TreeNode[];
  parent?: TreeNode;

  constructor(value: number) {
    super(value);
    this.children = [];
  }
}
