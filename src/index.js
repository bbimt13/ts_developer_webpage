import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/login/Home';
import Register from './components/login/Register';
import Content from './components/login/Content';
import DoodleDraw from './components/doodledraw/DoodleDraw';
import TranslateChat from './components/translatechat/TranslateChat';
import SelectRoom from './components/translatechat/SelectRoom';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:9000";
axios.defaults.withCredentials = true;

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      { path: '/', element: <Login/> },
      { path: 'home', element: <Home/> },
      { path: 'register', element: <Register/> },
      { 
        path: 'content', 
        element: <Content/>,
        children: [
          { path: 'doodledraw', element: <DoodleDraw/> },
          { path: 'selectroom', element: <SelectRoom/>},
          { path: 'chatting', element: <TranslateChat/> }
        ]
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
