import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './style/main.css';
import App from './App';
import { VibeIdProvider } from './context/VibeContext'
import { ArtistPageProvider } from './context/ArtistPageContext'
import { ArtistIdProvider } from './context/ArtistIdContext'
import { ColorProvider } from './context/ColorContext'
import { ChangeProvider } from './context/ChangeContext'
import configureStore from './store'

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ColorProvider>
        <ChangeProvider>
          <ArtistPageProvider>
            <ArtistIdProvider>
              <VibeIdProvider>
                <App />
              </VibeIdProvider>
            </ArtistIdProvider>
          </ArtistPageProvider>
        </ChangeProvider>
      </ColorProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
