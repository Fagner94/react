import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import {Router, Scene} from 'react-native-router-flux';

import Animation from 'lottie-react-native';


import welcome from './telas/welcome';
import tela1 from './telas/tela1'
import menu from './telas/menu';
export default class app extends Component{
  render(){
      return(

       <Router>
         <Scene key="root">
          <Scene key ="welcome"
          component={welcome}
          title ="Bem-vindo"
          initial
          />
          <Scene key="tela1"
          component={tela1}
          title = "tela1"

          />
          <Scene key="menu"
          component={menu}
          title = "menu"

          />

         </Scene>

       </Router>

      );



  }
}