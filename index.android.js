/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import SvgDemo from './src/component/Icon';
import SvgUri from './lib/react-native-svg-uri';

export default class zhidian extends Component {
  loginWithFacebook(){
    alert("hello vector icons")
  }
  render() {
    return (
      <ScrollView style={styles.scrollview}>
        <View style={styles.container}>
          <Icon name="rocket" size={30} color="#900" />
          <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
            Login with Facebook
          </Icon.Button>

          <Icon.Button name="facebook" backgroundColor="#3b5998">
            Login with Facebook
          </Icon.Button>

          <SvgDemo/>

          <SvgUri
            width="200"
            height="200"
            source={require("./src/assets/SVG/sp_check.svg")}
          />

          <SvgUri
            width="200"
            height="200"
            source={{uri:'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg'}}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('zhidian', () => zhidian);
