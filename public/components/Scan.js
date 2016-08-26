import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Image, TextInput } from 'react-native';
const style = require('./../style/styles');

export default class Scan extends Component {
  render() {
    _this = this;

    return (
     <View style={{flex: 1, flexDirection: 'column'}}>
       <View style={{backgroundColor: '#ffff66', flex: 1.5, flexDirection: 'column'}}>
         <View style={{marginTop: 20, marginLeft: 350}}>
           <TouchableHighlight onPress={this.props.goToAllergiesAndDiet}>
             <Image style={{height: 50, width: 50}} source={require('image!menu')}></Image>
           </TouchableHighlight>
         </View>
         <View style={style.styles.container}>
           <Text style={{fontFamily: 'AvenirNextCondensed-Heavy', color: 'grey', fontSize: 50, marginLeft: 5}}>SEARCH</Text>
         </View>
         <View style={{flex: 1, flexDirection: 'row'}}>
          <TextInput style={{height: 70, width: 300, borderWidth: 1, borderColor: 'gray', marginLeft: 15, backgroundColor: 'white'}} placeholder="  Search for Product" onChangeText={(searchTerm) => this.setState({searchTerm})} onSubmitEditing={this.searchProduct.bind(this)} />
          <TouchableHighlight onPress={this.searchProduct.bind(this)} style={{height: 45, width: 50, marginLeft: 10}}>
            <Image source={require('image!search')} style={{height: 70, width: 70, marginLeft: 10, marginBottom: 5}}></Image>
          </TouchableHighlight>
         </View>
       </View>
       <View style={{backgroundColor: '#00cccc', flex: 1.5, flexDirection: 'column'}}>
           <View style={style.styles.container}>
             <Text style={{fontFamily: 'AvenirNextCondensed-Heavy', color: 'grey', fontSize: 50, marginLeft: 5}}>SCAN UPC CODE</Text>
             <TouchableHighlight onPress={this.props.onForward}>
               <Image style={{height: 200, width: 200}} source={require('image!scan')}></Image>
             </TouchableHighlight>
           </View>
         </View>
     </View>
    );
  }

  searchProduct () {
    console.log('inside searchProduct and value is', this.state);

    if (!this.state) { 
      return console.log('no text entered'); 
    }

    console.log(this.state.searchTerm);

    fetch('https://murmuring-dusk-10598.herokuapp.com/api/foodfacts/search', 
    // fetch('http://10.6.24.1:3000/api/foodfacts/search',
      {
        method: 'POST',
        headers:
        {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          { searchTerm: this.state.searchTerm }
        )
      })
    .then(data => {
      console.log('returned search item');
      // console.log(data);
      this.props.goToSearchResult(data);
      // this.props.goToSearchResult(JSON.parse(data._bodyInit));
    })
    .catch(err => console.log(err));
  }
}