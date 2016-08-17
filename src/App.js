// @flow

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './configureStore';

import Counter from './Counter';

import type { Store } from './types';

const store: Store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Counter />
      </Provider>
    );
  }
}

export default App;
