import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProviderComponent } from 'core/theme';

import App from './app';

ReactDOM.render(
  <>
    <ThemeProviderComponent>
      <App />
    </ThemeProviderComponent>
  </>,
  document.getElementById('root')
);
