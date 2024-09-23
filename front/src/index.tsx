import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProviderComponent } from 'core/theme';
import { App } from './app';

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <ThemeProviderComponent>
      <App />
    </ThemeProviderComponent>
  </>
);
