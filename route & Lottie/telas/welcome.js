import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View,TouchableHighlight } from 'react-native';
import Animation from 'lottie-react-native';

import anim from '../assets/click.json';
import { Actions } from 'react-native-router-flux';

export default class welcome extends Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bem Vindo</Text>
        
        <View >
        <TouchableHighlight onPress={()=>Actions.menu() }>
          <Animation
            
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 80,
              height: 80
            }}
            loop={true}
            source={anim}
          />
          
          </TouchableHighlight>
        </View>
            <Text style={styles.welcome}>Clique acima para acessar</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A6207E'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  }
});