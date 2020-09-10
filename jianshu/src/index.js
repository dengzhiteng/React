import React from 'react';
import ReactDom from 'react-dom'
//---组件
import Main from './Main.js'
import Header from './Header.js'
import Footer from './Footer.js'

import './css/App.css';
ReactDom.render(
    <div>
        <Header />
        <Main />
        <Footer />
    </div>
    , document.getElementById('root'));
