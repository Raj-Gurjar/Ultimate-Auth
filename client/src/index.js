import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalContextProvider from './components/Context/GlobalContextProvider';
import { Toaster } from 'react-hot-toast';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <GlobalContextProvider>
      <React.StrictMode>
        <App />
        <Toaster />
      </React.StrictMode>
    </GlobalContextProvider>
  </BrowserRouter>
);


