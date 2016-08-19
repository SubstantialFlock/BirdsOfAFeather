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
  Image,
  AsyncStorage,
  Alert
} from 'react-native';
import NavigatePage from './public/components/NavigatePage';



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
      userId: null,
      username: null,
      email: null,
      friends: [],
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
      isVegan: true,
      isVegetarian: true,
      isPescatarian: true,
    };
  }

  componentWillMount() {
    this._loadInitialState().done();
  }

  async _loadInitialState() {
    _this = this;
    try {
      let multi_get_keys = ['USERID','USERNAME', 'EMAIL', 'FRIENDS', 'CONCERNS', 'ALLERGIES', 'DIETS'];
      await AsyncStorage.multiGet(multi_get_keys, (err, store) => {
        if (store[0][1] !== null){
          _this.setState({
            userId: store[0][1],  
            username: store[1][1],
            email: store[2][1],
            friends: store[3][1],
            concerns: store[4][1],
            allergies: store[5][1],
            diets: store[6][1]
          })
          console.log('This is the locally stored data:')
          console.log('USERID: ', store[0][1]);
          console.log('USERNAME: ', store[1][1]);
          console.log('EMAIL: ', store[2][1]);
          console.log('FRIENDS: ', store[3][1]);
          console.log('CONCERNS: ', store[4][1]);
          console.log('ALLERGIES: ', store[5][1]);
          console.log('DIETS: ', store[6][1]);
        } else {
          console.log('Initialized with no selection on disk.');
        }
      })
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }
  
  async onSelectConcern(concern) {
    this.state.concerns.push(concern);
    try {
      await AsyncStorage.setItem('CONCERNS', JSON.stringify(this.state.concerns));
    } catch (error) {
      console.log('Error saving data: ', error);
    }
  }

  async onSelectAllergy(allergy) {
    this.state.selected = true;
    this.state.allergies.push(allergy);
    try {
      await AsyncStorage.setItem('ALLERGIES', JSON.stringify(this.state.allergies));
    } catch (error) {
      console.log('Error saving data: ', error);
    }
  }

  async onSelectDiet(diet) {
    this.state.diets.push(diet);
    try {
      await AsyncStorage.setItem('DIETS', JSON.stringify(this.state.diets));
    } catch (error) {
      console.log('Error saving data: ', error);
    }
  }

  onFilterProductData(navigator, data) {
    console.log('here in onFilterProductData:');
    var parsedData = JSON.parse(data._bodyInit);
    if (!parsedData.validUPC) {
      Alert.alert(
            'Alert Title',
            'Product not found',
            [
              {text: 'Start over', onPress: () => navigator.replace({
                                                    page: 'Welcome',
                                                    index: 1
                                                  })
              },
              {text: 'Scan again', onPress: () => navigator.pop()}
            ]
          )
    } else {
      var allergiesProductContains = parsedData.allergies;
      this.state.grade = parsedData.score;
      this.state.productIngredients = parsedData.ingredientList;
      this.state.isVegan = true;
      this.state.isVegetarian = true;
      this.state.isPescatarian = true;

      if (parsedData.diet['Animal-Derived'] && this.state.diets.indexOf('Vegan') !== -1) {
        this.state.isVegan = false;
      }

      if (this.state.diets.indexOf('Vegetarian') !== -1) {
        if (allergiesProductContains['Animal-Derived']) {
          allergiesProductContains['Animal-Derived'].forEach(allergies => {
            if (allergiesProductContains['Dairy'].indexOf(allergies) === -1 && allergiesProductContains['Eggs'].indexOf(allergies) === -1) {
              this.state.isVegetarian = false;
            }
          });
        }
      }

      if (this.state.diets.indexOf('Pescatarian') !== -1) {
        if (allergiesProductContains['Animal-Derived']) {
          allergiesProductContains['Animal-Derived'].forEach(allergies => {
            if (allergiesProductContains['Dairy'].indexOf(allergies) === -1 && allergiesProductContains['Eggs'].indexOf(allergies) === -1
              && allergiesProductContains['Shellfish'].indexOf(allergies) === -1 && allergiesProductContains['Fish'].indexOf(allergies) === -1) {
              this.state.isPescatarian = false;
            }
          });
        }
      }

      this.state.ingredientsToAvoid = [];
      this.state.productAllergies = [];

      this.state.allergies.forEach(allergy => {
        if (allergiesProductContains[allergy]) {
          this.state.productAllergies.push(allergy);
          allergiesProductContains[allergy].forEach(allergyItContains => {
            this.state.ingredientsToAvoid.push(allergyItContains);
          });
        }
      });

      this.setState({
        productImage: parsedData.imgURL,
        grade: parsedData.score,
        productIngredients: parsedData.ingredientList,
        ingredientsToAvoid: this.state.ingredientsToAvoid
      });
    }
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
    console.log('in onForward: ', route);
    const nextIndex = route.index + 1;
    navigator.push({
      page: this.state.pages[nextIndex],
      index: nextIndex
    });
  }
  
  onBack(route, navigator) {
    //if we are in the summary page and the user presses back
    if (route.index === 5) {
      //go back to the scan page
      navigator.pop();
      navigator.pop();
    } else if (route.index > 0) {
      navigator.pop();
    }
  }

  render() {
    return (
      <NavigatePage username={this.state.username} concerns={this.state.concerns} allergies={this.state.allergies} diets={this.state.diets} 
      selected={this.state.selected} productImage={this.state.productImage} grade={this.state.grade}
      isVegan={this.state.isVegan} isVegetarian={this.state.isVegetarian} isPescatarian={this.state.isPescatarian}
      productAllergies={this.state.productAllergies} ingredientsToAvoid={this.state.ingredientsToAvoid} productIngredients={this.state.productIngredients}
      onSelectConcern={this.onSelectConcern} onSelectAllergy={this.onSelectAllergy}
      onSelectDiet={this.onSelectDiet} onFilterProductData={this.onFilterProductData} goToSummary={this.goToSummary} onForward={this.onForward} onBack={this.onBack} rootParent={this}/>
    );
  }


}

AppRegistry.registerComponent('bof', () => bof);
