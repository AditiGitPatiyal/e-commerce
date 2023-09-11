import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppRouter } from './App';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store }
  from './GlobalState/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={AppRouter} /> 
    </Provider>
  </React.StrictMode>
);

