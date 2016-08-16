import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  View
} from 'react-native';
import Camera from 'react-native-camera';
import _ from 'lodash';

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
          onBarCodeRead= { _.throttle(this.readBarCode.bind(this), 5000, { 'trailing': false } ) }>
        </Camera>

      </View>
    );
  }

  readBarCode(event, test) {
    console.log('inside readBarCode 30', event);
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
      console.log(data);
      this.props.onFilterProductData(data);
      this.props.onForward();
    })
    .catch(err => console.log(err));
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
