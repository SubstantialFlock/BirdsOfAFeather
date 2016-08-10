import React, { Component, PropTypes } from 'react';
import { Text, TouchableHighlight, View, Image } from 'react-native';
const style = require('./../style/styles');

export default class Splash extends Component {
  render() {
    return (
      <View style={style.styles.container}>
        <Image
          source={{uri: 'https://elixirgraphics.com/assets/img/theme_images/feather-icon-256x256-NEW.jpg'}}
          style={style.styles.icon}
        />
        <Text style={{height: 50}}>It's easy to get started. Sign in with Facebook to get access to bof.</Text>
        <TouchableHighlight style={style.styles.login} onPress={this.props.onForward} >                                                                                                                                                                                               
          <Text style={style.styles.loginText}>Facebook Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
