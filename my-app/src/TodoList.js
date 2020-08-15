import React, { Component, Fragment } from "react";
import "./TodoList.css";

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
            onChange={this.inputChangedHandler}
          ></input>
          <button onClick={this.handleSubmit}>提交</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li key={index} className="item">
                <span dangerouslySetInnerHTML={{ __html: item }}></span>
                {item}
                <button onClick={this.handleItemDel.bind(this, index)}>
                  删除
                </button>
              </li>
            );
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
      list: ["<h1>test</h1>"],
      keyWords: "",
    };
    this.inputChangedHandler = this.inputChangedHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  handleItemDel(index, event) {
    const listCopy = [...this.state.list];
    listCopy.splice(index, 1);
    this.setState({
      list: listCopy,
    });
  }
}
export default TodoList;
