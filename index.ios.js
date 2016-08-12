/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import NavigatePage from './public/components/NavigatePage';
const userInfo = require('./data/userInfo');
const itemScanned = require('./data/itemScanned');

class bof extends Component {
  constructor(props) {
    super(props);

    this.onSelectConcern = this.onSelectConcern.bind(this);
    this.onSelectAllergy = this.onSelectAllergy.bind(this);
    this.onSelectDiet = this.onSelectDiet.bind(this);
    this.onFilterProductData = this.onFilterProductData.bind(this);
    this.goToSummary = this.goToSummary.bind(this);
    this.onForward = this.onForward.bind(this);
    this.onBack = this.onBack.bind(this);

    this.state = {
      username: userInfo.userInfo.name,
      concerns: [],
      allergies: [],
      diets: [],
      selected: false,
      pages: ['Splash', 'Welcome', 'Allergies/Diet', 'Scan', 'UPCReader', 'Summary'],
      productImage: '',
      grade: 'N/A',
      productIngredients: [],
      productAllergies: [],
      ingredientsToAvoid: [],
      user: null,
      credential: {}
    };
  }
  
  onSelectConcern(concern) {
    this.state.concerns.push(concern);
  }

  onSelectAllergy(allergy) {
    this.state.selected = true;
    this.state.allergies.push(allergy);
  }

  onSelectDiet(diet) {
    this.state.diets.push(diet);
  }

  onFilterProductData(data) {
    var parsedData = JSON.parse(data._bodyInit);
    var allergiesProductContains = parsedData.allergies;

    this.state.grade = parsedData.score;
    this.state.productIngredients = parsedData.ingredientList;

    var that = this;

    this.state.allergies.forEach(allergy => {
      if (allergiesProductContains[allergy]) {
        that.state.productAllergies.push(allergy);
        allergiesProductContains[allergy].forEach(allergyItContains => {
          that.state.ingredientsToAvoid.push(allergyItContains);
        });
      }
    });
    
    this.setState({
      productImage: parsedData.imgURL
    });
  }

  goToSummary(route, navigator) {
    let page;
    const nextIndex = route.index + 2;
    navigator.push({
      page: this.state.pages[nextIndex],
      index: nextIndex
    });
  }

  onForward(route, navigator) {
    let page;
    const nextIndex = route.index + 1;
    navigator.push({
      page: this.state.pages[nextIndex],
      index: nextIndex
    });
  }
  
  onBack(route, navigator) {
    if (route.index > 0) {
      navigator.pop();
    }
  }

  // takePicture() {
  //   this.camera.capture()
  //     .then((data) => console.log(data))
  //     .catch(err => console.error(err));
  // }

  render() {
    return (
      <NavigatePage username={this.state.username} concerns={this.state.concerns} allergies={this.state.allergies} diets={this.state.diets} 
      selected={this.state.selected} productImage={this.state.productImage} grade={this.state.grade} productIngredients={this.state.productIngredients} 
      productAllergies={this.state.productAllergies} ingredientsToAvoid={this.state.ingredientsToAvoid} onSelectConcern={this.onSelectConcern} onSelectAllergy={this.onSelectAllergy} 
      onSelectDiet={this.onSelectDiet} onFilterProductData={this.onFilterProductData} goToSummary={this.goToSummary} onForward={this.onForward} onBack={this.onBack} rootParent={this}/>
    );
  }


}

AppRegistry.registerComponent('bof', () => bof);
