import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Test from './componentes/Test'
// import CounterApp from './componentes/CounterApp';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Test a='rigo' /> */}
    {/* <CounterApp value = {10}/> */}
  </React.StrictMode>,
  document.getElementById('root')
);



reportWebVitals();
