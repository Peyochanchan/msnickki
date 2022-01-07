import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Videos from "./video/Videos";
import Photos from "./photos/Photos";
import Dates from "./Dates";
import Bio from "./bio/Bio";

const App = () => {
  return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Bio} />
          <Route path="/videos" exact component={Videos} />
          <Route path="/dates" exact component={Dates} />
          <Route path="/photos" exact component={Photos} />
        </div>
      </BrowserRouter>
  );
};
export default App;
