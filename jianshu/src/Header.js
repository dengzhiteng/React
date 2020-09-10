import React, { Component } from 'react'
import './static/css/Header.scss'
import logo from './static/images/logo.png'

import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="Header">
                <div className="width-limit">
                    {/* 传统方式引入不行的 */}
                    {/*<img src="./static/images/logo.png"> */}
                    {/* 方式1 */}
                    {/*<img src={require('./static/images/logo.png')} />*/}
                    {/* 方式2 */}
                    <img src={logo} />
                    <div className="container">
                        <ul className="nav navbar-nav">
                            <li className="tab active">
                                <a href="/">
                                    <span className="menu-text">首页</span><i className="iconfont ic-navigation-discover menu-icon"></i>
                                </a>
                            </li>
                            <li className="tab ">
                                <a id="web-nav-app-download-btn" className="app-download-btn">
                                    <span className="menu-text">下载App</span><i className="iconfont ic-navigation-download menu-icon"></i></a>
                            </li>
                        </ul>

                        <Search
                            placeholder="搜索"
                            enterButton="查询"
                            size="large"
                            style={{ width: 400, marginTop: 10 }}
                            onSearch={value => console.log(value)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
