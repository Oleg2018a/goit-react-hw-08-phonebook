import React from 'react';
import ReactDOM from 'react-dom/client';


import { StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'Global.style';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import App from 'components/App';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

const theme = {
 
  spacing: value => `${value * 4}px`,
 
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <App />
            <GlobalStyle />
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
