import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppProvider from './context/AppContext';
import UserProvider from './context/UserContext';
import ProductsProvider from './context/ProductsContext';

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <UserProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </UserProvider>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
