import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Footer from "./components/footer/Footer"
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<span>Loading...</span>}>
      <App />
    </Suspense>
    <Footer />
  </React.StrictMode>,
  document.querySelector('#root')
);
