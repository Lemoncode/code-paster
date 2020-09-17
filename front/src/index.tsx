import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { StylesProvider } from '@material-ui/styles';

ReactDOM.render(
  <>
    <StylesProvider injectFirst>
      <App />
    </StylesProvider>
  </>,
  document.getElementById('root')
);
