import React from 'react';
import { Provider } from 'react-redux';
import Home from 'src/containers/Home';
import Landing from 'src/containers/Landing';
import configureStore from 'src/redux/store/store';
import { BrowserRouter, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import GlobalStyle from 'src/utilities/globalStyle';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Reset />
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
