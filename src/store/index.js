import React from 'react';
import PropTypes from 'prop-types';
import { createStore, StoreProvider } from 'easy-peasy';

import Models from './models';

let storeEnhancers = [];

if (__DEV__) {
  const reactotron = require('./reactotron-config').default;
  reactotron.initiate();
  storeEnhancers = [...storeEnhancers, reactotron.createEnhancer()];
}

const store = createStore(Models, {
  enhancers: [...storeEnhancers],
});

const Store = ({ children }) => (
  <StoreProvider store={store}>{children}</StoreProvider>
);

Store.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Store;
