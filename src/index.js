import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Footer from "./components/footer/Footer"


ReactDOM.render(
  <React.StrictMode>
    <App />
    <br/>
    <Footer />
  </React.StrictMode>,
  document.querySelector('#root')
);
