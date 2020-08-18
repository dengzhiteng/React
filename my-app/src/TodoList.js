import React, { Component } from "react";
import TodoItem from "./TodoItem.js";
import "./style/TodoList.css";

class TodoList extends Component {
  render() {
    return (
      <div className="box">
        <div>
          <h3> Todo List </h3>
          <input
            placeholder="请输入"
            type="text"
            value={this.state.keyWords}
            onChange={this.inputChangedHandler.bind(this)}
          ></input>
          <button onClick={this.handleSubmit.bind(this)}>提交</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return <TodoItem content={item} index={index} key={index} handleItemDel={this.handleItemDel()} />
          })}
        </ul>
      </div>
    );
  }
  //   定义构造函数
  constructor(props) {
    //  接受传值
    super(props);
    this.state = {
      list: [],
      keyWords: "",
    };
  }
  // 输入关键字
  inputChangedHandler = (event) => {
    this.setState({
      keyWords: event.target.value,
    });
  };
  // 提交
  handleSubmit(event) {
    const keyWords = this.state.keyWords;
    if (!keyWords) return;
    this.setState({
      keyWords: "",
      list: [...this.state.list, keyWords],
    });
  }
  //   删除 li
  handleItemDel(index) {
    const listCopy = [...this.state.list];
    listCopy.splice(index, 1);
    this.setState({
      list: listCopy,
    });
  }
}
export default TodoList;
