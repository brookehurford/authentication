import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

var Signin = require('./components/authentication/signin');

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Signin />
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
