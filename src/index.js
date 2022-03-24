import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Footer from "./components/footer/Footer"
import './i18n';


const app = (
  <React.StrictMode>
    <Suspense fallback={<span>Loading...</span>}>
      <App />
    </Suspense>
    <Footer />
  </React.StrictMode>
);

ReactDOM.hydrate(
  app,
  document.getElementById('root')
)
