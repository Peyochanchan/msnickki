import React, { Suspense } from 'react';
import { hydrate, render } from 'react-dom';

import App from './components/App';
import Footer from "./components/footer/Footer"
import './i18n';


const app = (
  <React.StrictMode>
    <Suspense fallback={<span>Loading...</span>}>
      <App />
      <Footer />
    </Suspense>
  </React.StrictMode>
);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  render(app, rootElement);
}
