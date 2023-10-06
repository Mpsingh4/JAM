import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Auth0Provider
        domain="dev-rvt8eapzdsc2ybp0.us.auth0.com"
        clientId="mLkTFiSnbi3VPWCucTfSmNoqm1sT1NOH"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  );


