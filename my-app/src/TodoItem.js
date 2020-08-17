import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

export class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.delItem = this.delItem.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <div className="item">
        <span dangerouslySetInnerHTML={{ __html: this.props.content }}></span>
        <div className="flex">
          <button onClick={this.handleToggle}>toggle</button>
          <CSSTransition
            in={this.state.show}
            timeout={1000}
            classNames="fade"
            unmountOnExit
            onEntered={(el) => {
              el.style.color = "blue";
            }}
            appear={true}
          >
            <button onClick={this.delItem}>删除</button>
          </CSSTransition>
        </div>
      </div>
    );
  }
  handleToggle() {
    this.setState({
      show: !this.state.show,
    });
    // console.log(this.state.show);
  }
  delItem() {
    // 删除
    this.props.handleItemDel(this.props.index);
  }
}
export default TodoItem;
