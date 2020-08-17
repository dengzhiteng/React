import React, { Component } from 'react'
export class TodoItem extends Component {
    render() {
        return (
            <div>
                <li className="item">
                    <span dangerouslySetInnerHTML={{ __html: this.props.content }}></span>
                    <button >
                        删除
                </button>
                </li>
            </div>
        )
    }
}
export default TodoItem
