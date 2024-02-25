import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages';
import { GlobalStyle } from './styles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      {/* <React.StrictMode> */}
      <Pages />
      {/*     </React.StrictMode> */}
    </BrowserRouter>
    ,
  </>,
);
