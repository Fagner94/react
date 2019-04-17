import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Body, Left } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import {Actions} from 'react-native-router-flux';



export default class inicio extends Component {
  render() {
    return (
      <View style={styles.geral} >
      <Grid>
      <Col >
      <Row style={styles.n1} >
        <Body>
        <Text onPress={()=> Actions.tela2()}>Tela1</Text>
        </Body>
      </Row>
      <Row style={styles.n2}>
        <Body>
            <Text>Tela2</Text>
        </Body>
      </Row>
      </Col>
      <Col>
      <Row style={styles.n3}>
       <Body>
        <Text>Tela3</Text>
        </Body>
      </Row>
      <Row style={styles.n4}>
        <Body>
        <Text>Tela4</Text>
        </Body>
      </Row>
      </Col>
   </Grid>
   </View>
    );
  }
}

const styles = StyleSheet.create({
 geral:{

  marginTop:70,
  
},
  
  n1: {
    width: 100,
    height:100,
    backgroundColor: '#fff222',
    marginTop:50,
    margin:20,
  },
  n2 :{
    width: 100,
    height:100,
    backgroundColor: '#aaa222',
    marginTop:50,
    margin:20,
  },
  n3:{
    width: 100,
    height:100,
    backgroundColor: '#aaaaff',
    marginTop:50,
    margin:20,
  },
  n4:{
    width: 100,
    height:100,
    marginTop:50,
    backgroundColor: '#fff667',
    margin:20,
  }
  
});
