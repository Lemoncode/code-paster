import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider } from '@material-ui/styles';
import { AppContextProvider } from 'core/context';
import App from './app';

ReactDOM.render(
  <>
    <StylesProvider injectFirst>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </StylesProvider>
  </>,
  document.getElementById('root')
);
