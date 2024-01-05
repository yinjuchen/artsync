import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CategoriesProvider } from './contexts/categories.context';
import * as serviceWorkerResgistration from './serviceWorkerRegistration'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoriesProvider>
        <App />
      </CategoriesProvider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();

serviceWorkerResgistration.register()