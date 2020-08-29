import React, { Component } from "react";

import Header from "./Header.js";
import Menu from "./Menu.js";
import ArticleList from "./ArticleList.js";
import RecomList from "./RecomList.js";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <ArticleList></ArticleList>
        <Menu></Menu>
        <RecomList></RecomList>
      </div>
    );
  }
}
