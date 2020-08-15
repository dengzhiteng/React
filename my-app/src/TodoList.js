import React, { Component } from "react";
class TodoList extends Component {
  render() {
    return (
      <div>
        <div>
          <h3> Todo List </h3>
          <input
            placeholder="请输入"
            type="text"
            value={this.state.keyWords}
            onChange={(event) => this.inputChangedHandler(event)}
          ></input>
          <button> 提交 </button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      keyWords: "关键字",
    };
  }
  inputChangedHandler = (event) => {
    this.setState({
      keyWords: event.target.value,
      list: [event.target.value, ...this.state.list],
    });
  };
}
export default TodoList;
