import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import {Auth0Provider} from "@auth0/auth0-react";
import {ThemeProvider} from "@mui/material";
import {createTheme} from "./theme";

ReactDOM.render(
  <React.StrictMode>
      <Auth0Provider
          domain="dev-thlfc87y.us.auth0.com"
          clientId="DCsQKqhOGK3f1JArxGSFrnpcQm2UCyEt"
          redirectUri={window.location.origin +"/dashboard"}
          audience="https://app.ctoteachings.com/predictions"
          scope="read:current_user update:current_user_metadata"
          >
          <ThemeProvider
              theme={createTheme({
                  direction: 'ltr',
                  responsiveFontSizes: true,
                  mode: 'light'
              })}
          >
            <CssBaseline/>
            <App />
          </ThemeProvider>
      </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
