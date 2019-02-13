import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import React, { Component } from 'react';
import Header from './components/header/header.js';
import Chatter from './components/chat/chat.js'
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
          <Chatter />
        </div>
    );
  }
}

export default App;

