import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, TouchableHighlight, View } from 'react-native';

export default class TextSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {searchTerm: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Search for Product"
          onChangeText={(searchTerm) => this.setState({searchTerm})}
        />
        <TouchableHighlight onPress={this.searchProduct.bind(this)}>
          <Text>Search</Text>
        </TouchableHighlight>
      </View>
    );
  }

  searchProduct () {
    console.log('inside searchProduct');
    console.log(this.state.searchTerm);

    // fetch('https://murmuring-dusk-10598.herokuapp.com/api/foodfacts/upc', 
    fetch('http://10.6.24.1:3000/api/foodfacts/search',
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
      console.log(data);
      // console.log(data);
      // this.props.onFilterProductData(data);
      // this.props.onForward();
    })
    .catch(err => console.log(err));
  }

}

