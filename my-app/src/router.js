//引入react jsx写法的必须
import React from "react";
//引入需要用到的页面组件
import Home from "./pages/home";
import About from "./pages/about";
import _404 from "./pages/tool/_404.js";
//引入一些模块
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function router() {
  return (
    <Router>
      <Route excat path="/home" component={Home} />
      <Route excat path="/about" component={About} />
    </Router>
  );
}
export default router;
