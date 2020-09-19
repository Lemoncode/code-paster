import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider } from '@material-ui/styles';
import App from './app';

ReactDOM.render(
  <>
    <StylesProvider injectFirst>
      <App />
    </StylesProvider>
  </>,
  document.getElementById('root')
);
