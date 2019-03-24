import React from 'react';
import { Provider } from 'react-redux';
import Home from 'src/containers/Home';
import configureStore from 'src/redux/store/store';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
