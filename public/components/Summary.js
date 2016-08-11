import React, { Component, PropTypes } from 'react';
import { Text, TouchableHighlight, View, Image } from 'react-native';

export default class Summary extends Component {
  render() {
    return (
      <View>
        <Text>{'\n'}</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image source={require('./../../images/honey-nut-cheerios-m.jpg')} style={{height: 150, width: 150}}></Image>
          <Text style={{textAlign: 'center', fontSize: 40, fontFamily: 'Didot-Italic'}}>Grade: 86</Text>
        </View>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <Text style={{fontSize: 20, fontFamily: 'Didot-Italic', marginLeft: 8}}>Allergies</Text>
          <View style={{flex: 0.5, flexDirection: 'row'}}>
            <Image style={{height: 30, width: 30, marginLeft: 8}} source={require('./../../images/bread-flat.png')}></Image>
          </View>
        <Text style={{fontSize: 20, fontFamily: 'Didot-Italic', marginLeft: 8}}>Dietary Concerns</Text>
          <View style={{flex: 0.5, flexDirection: 'row'}}>
            <Image style={{height: 30, width: 30, marginLeft: 8}} source={{uri: 'http://pythagoreancrank.com/wp-content/uploads/2013/09/OrganicNotVegan.png'}}></Image>
          </View>
        <View style={{flex: 0.5, flexDirection: 'row'}}>
          <Text style={{marginLeft: 10, fontFamily: 'Didot', fontSize: 18, color: 'green'}}>Healthy</Text>
          <Text style={{marginLeft: 10, fontFamily: 'Didot', fontSize: 18, color: '#ffd633'}}>Unhealthy</Text>
          <Text style={{marginLeft: 10, fontFamily: 'Didot', fontSize: 18, color: 'purple'}}>Controversial</Text>
          <Text style={{marginLeft: 10, fontFamily: 'Didot', fontSize: 18, color: 'red'}}>Avoid</Text>
        </View>
        <Text style={{color: 'red', fontFamily: 'Didot', textAlign: 'center'}}>{this.props.productDescription.badIngredients}</Text>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Go Back</Text>
        </TouchableHighlight>
      </View>
    );
  }
}