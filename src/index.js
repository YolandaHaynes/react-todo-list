//one of the components and needed to connect to react
import React from 'react';
//connects and reads the react and renders on the dom
import ReactDOM from 'react-dom';
// need to connect to index.css
import './index.css';
//connects to .app files
import App from './App';
//connects to the reportWebVitals files
import reportWebVitals from './reportWebVitals';

//a functon that renders ont he don using the app component files
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
