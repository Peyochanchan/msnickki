import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Helmet, HelmetProvider } from "react-helmet-async";

import Footer from "./components/footer/Footer"
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<span>Loading...</span>}>
    <HelmetProvider>
        <Helmet>
          <title>Ms Nickki and the Memphis Soul Connection - Soul and Blues Music</title>
          <meta
            name="description"
            content="MS Nickki est chanteuse de Blues et de Soul Music, elle vient de Memphis TN, joue en concert avec le groupe Memphis Soul Connection / MS Nickki is a blues and Soul Music singer, from Memphis TN."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="https://res.cloudinary.com/dnpddlkrq/image/upload/v1647987191/ms%20nickki/MSNickki%20Blues%20and%20Soul%20Female%20Singer%20800x418.jpg" />
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
          <meta property="og:url" content="https://www.msnickki.com" />
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
            content="https://res.cloudinary.com/dnpddlkrq/image/upload/v1647987191/ms%20nickki/MSNickki%20Blues%20and%20Soul%20Female%20Singer%20800x418.jpg"
          />
        </Helmet>
      <App />
      </HelmetProvider>
    </Suspense>
    <br/>
    <Footer />
  </React.StrictMode>,
  document.querySelector('#root')
);
