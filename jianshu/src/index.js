import React from 'react';
import ReactDom from 'react-dom'
//---组件
import Main from './Main.js'
import Header from './Header.js'
import Footer from './Footer.js'

import './static/css/App.css';
import './static/css/common.scss';
const style = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
}
ReactDom.render(
    <div className="home" style={style}>
        <Header />
        <Main />
        <Footer />
    </div>
    , document.getElementById('root'));
