import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./nav/Nav";
import Videos from "./video/Videos";
import Photos from "./photos/Photos";
import Dates from "./dates/Dates";
import Bio from "./bio/Bio";
import PageNotFound from './404Page/PageNotFound';

import '../stylesheets/app.css';

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Bio} />
        <Route path="/videos" exact component={Videos} />
        <Route path="/dates" exact component={Dates} />
        <Route path="/photos" exact component={Photos} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
