import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

describe('App component tests', () => {
  test('component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div
    );
  });
});
