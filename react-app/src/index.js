import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './style/main.css';
import App from './App';
import { VibeIdProvider } from './context/VibeContext'
import configureStore from './store'

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <VibeIdProvider>
        <App />
      </VibeIdProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
