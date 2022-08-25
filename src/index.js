import React from 'react';

import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { render } from "react-dom";



import RoutesApp from './route/routes-app';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RoutesApp/>

  </ThemeProvider>
  ,
  rootElement
);



