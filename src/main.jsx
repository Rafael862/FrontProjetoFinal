import React from 'react';
import ReactDOM from 'react-dom/client';

import theme from './styles/theme';
import GlobalStyles from './styles/global';

import {Details} from './pages/Details';
import {ThemeProvider} from 'styled-components';
import {Footer} from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
    <Details />
    <Footer/>
    </ThemeProvider>
  </React.StrictMode>,
)
