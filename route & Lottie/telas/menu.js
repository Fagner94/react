import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {Body, Left, Right } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import {Actions} from 'react-native-router-flux';
import Animation from 'lottie-react-native';


import contatos from '../assets/contatos.json';


export default class menu extends Component {
    componentDidMount() {
        this.animation.play();
        this.animation2.play();
        this.animation3.play();
        this.animation4.play();
    }
    
  render() {
    return (
    <View style={styles.geral} >
      <View style={styles.m1} >
                  
          <Animation
            
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 80,
              height: 80
            }}
            loop={true}
            source={contatos}
          />

        </View>
        
        <View style={styles.m2}>
          <Animation
                    
                    ref={animation2 => {
                      this.animation2 = animation2;
                    }}
                    style={{
                      width: 80,
                      height: 80
                    }}
                    loop={true}
                    source={contatos}
          />
        
       </View>

       <View >
          <Animation
                    
                    ref={animation3 => {
                      this.animation3 = animation3;
                    }}
                    style={{
                      width: 80,
                      height: 80
                    }}
                    loop={true}
                    source={contatos}
          />
        
       </View>

       <View style={styles.m2}>
          <Animation
                    
                    ref={animation4 => {
                      this.animation4 = animation4;
                    }}
                    style={{
                      width: 80,
                      height: 80
                    }}
                    loop={true}
                    source={contatos}
          />
        
       </View>
    
     <View >
                  
                
   </View>
   </View>
    );
  }
}

const styles = StyleSheet.create({
 geral:{
  flex:1,
  marginTop:70,
  
},
m1:{
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    
},
m2:{
    
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
 
}

  
  
  
});
