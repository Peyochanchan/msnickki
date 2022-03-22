import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Nav from "./nav/Nav";
import Videos from "./video/Videos";
import Photos from "./photos/Photos";
import Dates from "./dates/Dates";
import Bio from "./bio/Bio";
import './app.css';

const App = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Helmet>
          <title>Ms Nickki and the Memphis Soul Connection - Soul and Blues Music</title>
          <meta
            name="description"
            content="MS Nickki est chanteuse de Blues et de Soul Music, elle vient de Memphis TN, joue en concert avec le groupe Memphis Soul Connection / MS Nickki is a blues and Soul Music singer, from Memphis TN."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="https://res.cloudinary.com/dnpddlkrq/image/upload/c_fill,g_east,h_800,w_800,x_0,y_331/v1647024471/ms%20nickki/MSNickki_singing_freddiePhotography.jpg" />
          <meta
            name="twitter:title"
            content="Ms Nickki and the Memphis Soul Connection - Blues Singer and Soul Music"
          />
          <meta name="twitter:creator" content="@peyochanchan" />
          <meta name="twitter:site" content="@peyochanchan" />
          <meta
            name="twitter:description"
            content="MS Nickki est chanteuse de Blues et de Soul Music, elle vient de Memphis TN, joue en concert avec le groupe Memphis Soul Connection // MS Nickki is a blues and Soul Music singer, from Memphis TN."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="www.msnickki.com" />
          <meta
            property="og:title"
            content="Ms Nickki and the Memphis Soul Connection - Blues Singer and Soul Music"
          />
          <meta
            property="og:description"
            content="MS Nickki est chanteuse de Blues et de Soul Music, elle vient de Memphis TN, joue en concert avec le groupe Memphis Soul Connection // MS Nickki is a blues and Soul Music singer, from Memphis TN."
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dnpddlkrq/image/upload/c_scale,h_1080,w_1080/v1647024471/ms%20nickki/MSNickki_singing_freddiePhotography.jpg"
          />
        </Helmet>
        <div>
          <Nav />
          <Route path="/" exact component={Bio} />
          <Route path="/videos" exact component={Videos} />
          <Route path="/dates" exact component={Dates} />
          <Route path="/photos" exact component={Photos} />
        </div>
      </HelmetProvider>
    </BrowserRouter>
  );
};
export default App;
