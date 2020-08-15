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
            onChange={this.inputChangedHandler.bind(this)}
          ></input>
          <button onClick={this.handleSubmit.bind(this)}>提交</button>
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
    });
  };
  handleSubmit(event) {
    const keyWords = this.state.keyWords;
    if (!keyWords) return;
    this.setState({
      keyWords: "",
      list: [...this.state.list, keyWords],
    });
  }
}
export default TodoList;
