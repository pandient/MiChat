import React from 'react';
import { StyleSheet } from 'react-native';
import LoginScreen from './views/LoginScreen'

function setup() {
  class Root extends React.Component {
    render() {
      return (
        <LoginScreen />
      );
    }
  }
  return Root;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  textStyle: {
    color: 'white'
  },
  buttonStyle: {
      borderColor: '#2980b9',
      backgroundColor: '#3498db'
  },
})

module.exports = setup;