import React, { Component } from 'react'
import './css/Header.scss'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="Header">
                <p className="p1">p1</p>
                <p className="p2">p2</p>
            </div>
        );
    }
}

export default Header;
