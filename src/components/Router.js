import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "../routes/Home";
import Search from "../routes/Search";
import TV from "../routes/TV";
import Header from "./Header";
import Detail from "../routes/Detail";

export default () => (
  <Router>
    <Header />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/tv' component={TV} />
      <Route path='/search' component={Search} />
      <Route path='/movie/:id' component={Detail} />
      <Route path='/show/:id' component={Detail} />
      <Redirect from='*' to='/' />
    </Switch>
  </Router>
);
