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
            content="MS Nickki chante un blues profond alliant la puissance du gospel (répertoire qu'elle connaît particulièrement bien) et la douceur de la soul: une alchimie musicale typique de Memphis, Tennessee, cette immense ville au riche passé musical dans laquelle elle réside depuis une dizaine d'années. Ses influences majeures sont des chanteuses telles Denise LaSalle, Aretha Franklin, Tina Turner, Barbara Carr et des chanteurs originaire de Memphis tels que Johnnie Taylor et Al Green"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="https://res.cloudinary.com/dnpddlkrq/image/upload/v1647024474/ms%20nickki/3582952248_a0af5ed27e_o_cvzxxj.jpg" />
          <meta
            name="twitter:title"
            content="Ms Nickki and the Memphis Soul Connection - Soul and Blues Music"
          />
          <meta name="twitter:creator" content="@peyochanchan" />
          <meta name="twitter:site" content="@peyochanchan" />
          <meta
            name="twitter:description"
            content="MS Nickki chante un blues profond alliant la puissance du gospel (répertoire qu'elle connaît particulièrement bien) et la douceur de la soul: une alchimie musicale typique de Memphis, Tennessee, cette immense ville au riche passé musical dans laquelle elle réside depuis une dizaine d'années. Ses influences majeures sont des chanteuses telles Denise LaSalle, Aretha Franklin, Tina Turner, Barbara Carr et des chanteurs originaire de Memphis tels que Johnnie Taylor et Al Green"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="www.msnickki.com" />
          <meta
            property="og:title"
            content="Ms Nickki and the Memphis Soul Connection - Soul and Blues Music"
          />
          <meta
            property="og:description"
            content="MS Nickki chante un blues profond alliant la puissance du gospel (répertoire qu'elle connaît particulièrement bien) et la douceur de la soul: une alchimie musicale typique de Memphis, Tennessee, cette immense ville au riche passé musical dans laquelle elle réside depuis une dizaine d'années. Ses influences majeures sont des chanteuses telles Denise LaSalle, Aretha Franklin, Tina Turner, Barbara Carr et des chanteurs originaire de Memphis tels que Johnnie Taylor et Al Green"
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dnpddlkrq/image/upload/v1647024474/ms%20nickki/3582952248_a0af5ed27e_o_cvzxxj.jpg"
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
