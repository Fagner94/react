/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Body, Left } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

import inicio from './inicio';
import tela2 from './tela2';


export default class App extends Component {
  render() {
    return (
      <Router>
      <Scene key="root">
        <Scene key="inicio"
          component={inicio}
          title="Home"
          initial
        />
       <Scene key="tela2"
       component={tela2}
       title="Tela2" 
      
       />
      </Scene>
    </Router>    
    );
  }
}
