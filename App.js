import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Navigator from './src/AppNavigator/AppNavigator';
import {Provider} from 'react-redux';
import store from './redux/store'



export default class App extends Component{
  render() {
    return (
       <Provider store={store}>
        <Navigator />
       </Provider>     
    );
  }
}


