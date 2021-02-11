import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'
import Serach from '/Components/Search'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Search />
      </Provider>

    );
  }
}