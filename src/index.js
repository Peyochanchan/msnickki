import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "./components/footer/Footer"
import './i18n';


const app = (
  <HelmetProvider>
    <Suspense fallback={<span>Loading...</span>}>
      <Helmet>
        <title>Ms Nickki and the Memphis Soul Connection - Soul and Blues Music</title>
        <meta
        name="description"
        content="MS Nickki est chanteuse de Blues et de Soul Music, elle vient de Memphis TN, joue en concert avec le groupe Memphis Soul Connection / MS Nickki is a blues and Soul Music singer, from Memphis TN."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/MSNickki_800x418.jpg" />
        <meta
        name="twitter:title"
        content="MsNickki and the Memphis Soul Connection, Soul & Blues Music in Europa"
        />
        <meta name="twitter:creator" content="@peyochanchan" />
        <meta name="twitter:site" content="@peyochanchan" />
        <meta
        name="twitter:description"
        content="MS Nickki est chanteuse de Blues et de Soul Music, et vient de Memphis TN. Elle joue en concert avec la Memphis Soul Connection, groupe de musiciens français."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.msnickki.com" />
        <meta
        property="og:title"
        content="MsNickki and the Memphis Soul Connection, Soul & Blues Music in Europa"
        />
        <meta
        property="og:description"
        content="MS Nickki est chanteuse de Blues et de Soul Music, et vient de Memphis TN. Elle joue en concert avec la Memphis Soul Connection, groupe de musiciens français."
        />
        <meta
        property="og:image"
        content="/MSNickki_800x418.jpg"
        />
      </Helmet>
      <App />
    </Suspense>
    <Footer />
  </HelmetProvider>
);

ReactDOM.hydrate(
  app,
  document.getElementById('root')
)
