

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import ScarletScreen from './ScarletScreen';
import GrayScreen from './GrayScreen';




export default class App extends Component {
  render() {
    return (
      <Router>
      <Scene key="root">
        <Scene key="tela1"
          component={ScarletScreen}
          title="Tela1"
          initial
        />
        <Scene
          key="tela2"
          component={GrayScreen}
          title="Tela2"
        />
      </Scene>
    </Router>    
    );
  }
}




