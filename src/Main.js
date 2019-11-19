import React, { Component } from "react";
import { BrowserRouter, Route, NavLink, HashRouter, Switch } from "react-router-dom";
import './index.js';
import Home from "./Pages/Home/Home.js";
import Blog from "./Pages/Blog/Blog.js";
import Single_blog from "./Pages/Single_blog/Single_blog.js";

class Main extends Component {
render() {
return (
<BrowserRouter>
<div>
<div className="content">

<Route exact path="/" component={Home}/>
<Route exact path="/Blog" component={Blog}/>
<Route exact path="/Single_blog" component={Single_blog}/>
</div>
</div>
</BrowserRouter>
);
}
}

export default Main;