import React, { Component } from 'react'
export class TodoItem extends Component {
    render() {
        return (
            <div>
                <li className="item">
                    <span dangerouslySetInnerHTML={{ __html: this.props.content }}></span>
                    <button onClick={this.props.handleItemDel(this.props.index)}>删除</button>
                </li>
            </div>
        )
    };
}
export default TodoItem
