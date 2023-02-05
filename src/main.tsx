import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import LoginPage from './pages/commons/login/LoginPage';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

//chinh trang main trong project (index.tsx) de ket  noi voi store trong
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <Provider store={store}>
  <App />
  // </Provider>
);
