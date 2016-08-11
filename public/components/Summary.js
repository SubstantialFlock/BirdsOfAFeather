import React, { Component, PropTypes } from 'react';
import { Text, TouchableHighlight, View, ListView, Image } from 'react-native';
const _ = require('underscore');
const Accordion = require('react-native-accordion');
const style = require('./../style/styles');

export default class Summary extends Component {
  constructor(props) {
    super(props);
    console.log('Inside constructor of Summary and this.props is', this.props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(_.range(1))
    };
  }

  renderRow(productDescription) {
    console.log('inside renderRow and the productDescription is', productDescription);
    var header = (
      <View style={{backgroundColor: 'grey'}}>
        <Text style={{fontFamily: 'Didot-Italic', textAlign: 'center', color: 'white'}}>Click for all ingredients</Text>
      </View>
    );
    var content = (
      <View>
        <Text style={{fontFamily: 'Didot-Italic'}}>{this.props.productDescription.ingredients}</Text>
      </View>
    );

    return (
      <Accordion
        header={header}
        content={content}
        easing='easeOutCubic'
      />
    );
  }

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
        <Text>{'\n'}</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this, this.props.productDescription)}
        />
        <Text>{'\n'}</Text>
        <TouchableHighlight style={style.styles.back} onPress={this.props.onBack}>
          <Text style={style.styles.text}>Go Back</Text>
        </TouchableHighlight>
      </View>
    );
  }
}