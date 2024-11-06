import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout';
import './Css/Main.css'
import EcommProvider from './ContextApi/EcommProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EcommProvider >
      <Layout />
    </EcommProvider>
  </React.StrictMode>
);
