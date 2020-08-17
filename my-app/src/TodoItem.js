import React, { Component } from "react";
export class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.delItem = this.delItem.bind(this);
  }
  render() {
    return (
      <div onClick={this.delItem} className="item">
        <span dangerouslySetInnerHTML={{ __html: this.props.content }}></span>
      </div>
    );
  }
  delItem() {
    // 删除
    this.props.handleItemDel(this.props.index);
  }
}
export default TodoItem;
