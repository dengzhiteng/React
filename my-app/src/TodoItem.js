import React, { Component } from "react";
import { Button, List, Typography, Divider } from 'antd';
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
      <List.Item>
        {this.props.content}
        <Button type="primary" onClick={this.handleToggle}>toggle11</Button>
        <Button type="primary" danger onClick={this.delItem}>删除</Button>
      </List.Item>
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
