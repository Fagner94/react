import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Body, Left } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";




export default class App extends Component<Props> {
  render() {
    return (
      <Grid>
      <Col >
      <Row style={styles.n1}>
      </Row>
      <Row style={styles.n2}>
      </Row>
      </Col>
      <Col>
      <Row style={styles.n3}>
      </Row>
      <Row style={styles.n4}>
      </Row>
      </Col>
   </Grid>
    );
  }
}

const styles = StyleSheet.create({
  n1: {
    width: 50,
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
    margin:20,
  },
  n4:{
    width: 100,
    height:100,
    backgroundColor: '#fff667',
    margin:20,
  }
  
});
