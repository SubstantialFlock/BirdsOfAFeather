import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  View,
  Vibration
} from 'react-native';
import Camera from 'react-native-camera';
import _ from 'lodash';
const style = require('./../style/styles');


export default class UPCReader extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          onBarCodeRead= { _.throttle(this.readBarCode.bind(this), 8000, { 'trailing': false } ) }>
        </Camera>


      </View>
    );
  }

<<<<<<< f0a74e704003fadd057188f4e51083c2ade397a0
  readBarCode(event) {
    Vibration.vibrate();
=======
  readBarCode(event, test) {
    console.log('inside readBarCode 30', event);

>>>>>>> Add button to test text search
    fetch('https://murmuring-dusk-10598.herokuapp.com/api/foodfacts/upc', 
      {
        method: 'POST',
        headers:
        {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          { event: event }
        )
      })
    .then(data => {
      console.log('data in readBarCode: ', data);
      this.props.onFilterProductData(data);
      this.props.onForward();
    })
    .catch(err => console.log('err in readBarCode: ', err));
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }

});

AppRegistry.registerComponent('UPCReader', () => UPCReader);
