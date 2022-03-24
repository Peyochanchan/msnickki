import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./nav/Nav";
import Videos from "./video/Videos";
import Photos from "./photos/Photos";
import Dates from "./dates/Dates";
import Bio from "./bio/Bio";
import '../stylesheets/app.css';

const App = () => {
  return (
    <BrowserRouter>
        <Nav />
        <Route path="/" exact component={Bio} />
        <Route path="/videos" exact component={Videos} />
        <Route path="/dates" exact component={Dates} />
        <Route path="/photos" exact component={Photos} />
    </BrowserRouter>
  );
}

export default App;
