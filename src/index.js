import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import CarData from './car-data/CarData';
import reportWebVitals from './reportWebVitals';
// import Plan from './plan/Plan';
// import Welcome from './plan copy/Welcome';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <CarData /> */}
    {/* <Plan/> */}
    {/* <Welcome/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
