import React, { Component } from 'react';
import Header from './Components/Header'
import { Provider } from 'react-redux'
import configureStore from './configureStore';
import Product from './Components/Product';
import ProductWrapper from './Components/ProductWrapper';

const store = configureStore()
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Header />
          <ProductWrapper/>
      </Provider>
    );
  }
}

export default App;
