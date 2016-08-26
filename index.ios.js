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
const userInfo = require('./data/userInfo');


class bof extends Component {
  constructor(props) {
    super(props);

    this.onSelectConcern = this.onSelectConcern.bind(this);
    this.onSelectAllergy = this.onSelectAllergy.bind(this);
    this.onSelectDiet = this.onSelectDiet.bind(this);
    this.onFilterProductData = this.onFilterProductData.bind(this);
    this.goToSummary = this.goToSummary.bind(this);
    this.goToProfile = this.goToProfile.bind(this);
    this.goToAllergiesAndDiet = this.goToAllergiesAndDiet.bind(this);
    this.favoriteProduct = this.favoriteProduct.bind(this);
    this.renderActivity = this.renderActivity.bind(this);
    this.renderFavoriteProducts = this.renderFavoriteProducts.bind(this);
    this.renderFollowing = this.renderFollowing.bind(this);
    this.onForward = this.onForward.bind(this);
    this.onBack = this.onBack.bind(this);
    this.goToSearchResult = this.goToSearchResult.bind(this);
    this.fetchItemUPC = this.fetchItemUPC.bind(this);

    this.state = {
      userId: null,
      username: null,
      title: '',
      picture: null,
      profilePage: 'Activity',
      following: { },
      email: null,
      concerns: [],
      allergies: [],
      diets: [],
      pages: ['Splash', 'Welcome', 'Allergies/Diet', 'Scan', 'UPCReader', 'Summary', 'Profile', 'SearchResult'],
      Shellfish: false,
      Peanuts: false,
      AnimalDerived: false,
      Soy: false,
      Dairy: false,
      Wheat: false,
      Corn: false,
      Sulfite: false,
      TreeNuts: false,
      Nightshades: false,
      Egg: false,
      Fish: false,
      Transfat: false,
      Gluten: false,
      Flavoring: false,
      vegan: false,
      vegetarian: false,
      pescatarian: false,
      favorited: false,
      favoritedProducts: {},
      productImage: 'http://cdn.shopify.com/s/files/1/0984/6418/t/7/assets/noimage.jpg?17276477175536323609',
      grade: 'N/A',
      averageRating: 'N/A',
      productIngredients: [],
      productAllergies: [],
      ingredientsToAvoid: [],
      isVegan: true,
      isVegetarian: true,
      isPescatarian: true,
      searchResult: [],
      myRating: 0,
      comments: []
    };
  }

  componentWillMount() {
    this._loadInitialState().done();
  }

  async _loadInitialState() {
    _this = this;
    try {
      let multi_get_keys = ['USERID','USERNAME', 'EMAIL', 'FRIENDS', 'PICTURE', 'ALLERGIES', 'DIETS'];
      await AsyncStorage.multiGet(multi_get_keys, (err, store) => {
        if (store[0][1] !== null){
          _this.setState({
            userId: JSON.parse(store[0][1]),  
            username: JSON.parse(store[1][1]),
            email: JSON.parse(store[2][1]),
            friends: JSON.parse(store[3][1]) || [],
            picture: JSON.parse(store[4][1]),
            allergies: JSON.parse(store[5][1]) || [],
            diets: JSON.parse(store[6][1]) || [],
          })

          for (var i = 0; i < this.state.allergies.length; i++) {
            this.toggleAllergy(this.state.allergies[i]);
          }
          if (this.state.diets[0]) {
            if (this.state.diets[0] === 'Vegan') {
              this.state.vegan = true;
            }
            if (this.state.diets[0] === 'Vegetarian') {
              this.state.vegetarian = true;
            }
            if (this.state.diets[0] === 'Pescatarian') {
              this.state.pescatarian = true;
            }
          }

          console.log('This is the locally stored data:')
          console.log('USERID: ', store[0][1]);
          console.log('USERNAME: ', store[1][1]);
          console.log('EMAIL: ', store[2][1]);
          console.log('FRIENDS: ', store[3][1]);
          console.log('PICTURE: ', store[4][1]);
          console.log('ALLERGIES: ', store[5][1]);
          console.log('DIETS: ', store[6][1]);
          console.log('allergies state: ', _this.state.allergies)
          console.log('diet state: ', _this.state.diets)
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

  deleteAllergy(allergy) {
    let allergyIndex = this.state.allergies.indexOf(allergy);
    this.state.allergies.splice(allergyIndex, 1);

    this.setState({
      allergies: this.state.allergies
    });
    console.log('=======================after delete====================', this.state.allergies);
  }

  addAllergy(allergy) {
    if (this.state.allergies.indexOf(allergy) === -1) {
      this.state.allergies.push(allergy);
      console.log('=========================after push==============', this.state.allergies);
    }
  }

  toggleAllergy(allergy) {
    console.log('inside toggleAllergy');
    if (allergy === 'Animal-Derived') {
      this.state.AnimalDerived = !this.state.AnimalDerived;
      if (!this.state.AnimalDerived) {
        this.deleteAllergy('Animal-Derived');
      } else {
        this.addAllergy('Animal-Derived');
      }
    } else if (allergy === 'Tree Nuts') {
      if (allergy === 'Tree Nuts') {
        this.state.TreeNuts = !this.state.TreeNuts;
        if (!this.state.TreeNuts) {
          this.deleteAllergy('Tree Nuts');
        } else {
          this.addAllergy('Tree Nuts');
        }
      }
    } else if (allergy === 'Trans fat') {
      if (allergy === 'Trans fat') {
        this.state.Transfat = !this.state.Transfat;
        if (!this.state.Transfat) {
          this.deleteAllergy('Trans fat');
        } else {
          this.addAllergy('Trans fat');
        }
      }
    } else {
      this.state[allergy] = !this.state[allergy];
        if (!this.state[allergy]) {
          this.deleteAllergy(allergy);
        } else {
          this.addAllergy(allergy);
        }
    }

    this.setState({
      Shellfish: this.state.Shellfish
    });
  }

  async onSelectAllergy(allergy) {
    console.log('=========================before delete/push=============', this.state.allergies)
    console.log('this.state.allergy is', this.state[allergy]);
    this.toggleAllergy(allergy);

    try {
      await AsyncStorage.setItem('ALLERGIES', JSON.stringify(this.state.allergies));
    } catch (error) {
      console.log('Error saving data: ', error);
    }
  }


  toggleDiet(diet) {
    if (!this.state.diets[0]) {
      this.state.diets = [];
    }
    if (this.state.diets.length === 0) {
      this.state.diets.push(diet);
      console.log('===============diet after push==============', this.state.diets);
      if (diet === 'Vegan') {
        this.state.vegan = true;
      }
      if (diet === 'Vegetarian') {
        this.state.vegetarian = true;
      }
      if (diet === 'Pescatarian') {
        this.state.pescatarian = true;
      }
    } else {
      if (diet === this.state.diets[0]) {
        this.state.diets.splice(0, 1);
        if (diet === 'Vegan') {
          this.state.vegan = false;
        }
        if (diet === 'Vegetarian') {
          this.state.vegetarian = false;
        }
        if (diet === 'Pescatarian') {
          this.state.pescatarian = false;
        }
      }
      console.log('===============diet after delete============', this.state.diets);
    }

    if (diet === 'Vegan') {
      if (this.state.vegan && this.state.diets[0] === 'Vegan') {
        console.log('Entering in vegan if statement');
        this.state.vegetarian = false;
        this.state.pescatarian = false
      }
    } else if (diet === 'Vegetarian') {
      if (this.state.vegetarian && this.state.diets[0] === 'Vegetarian') {
        console.log('Entering vegetarian if statement');
        this.state.vegan = false;
        this.state.pescatarian = false;
      }
    } else if (diet === 'Pescatarian') {
      if (this.state.pescatarian && this.state.diets[0] === 'Pescatarian') {
        console.log('Entering pescatarian if statement');
        this.state.vegan = false;
        this.state.vegetarian = false;
      }
    }

    this.setState({
      vegan: this.state.vegan,
      vegetarian: this.state.vegetarian,
      pescatarian: this.state.pescatarian,
      diets: this.state.diets
    });
  }

  async onSelectDiet(diet) {
    console.log('=================== diet before push/delete=========', this.state.diets);
    this.toggleDiet(diet);

    try {
      await AsyncStorage.setItem('DIETS', JSON.stringify(this.state.diets));
    } catch (error) {
      console.log('Error saving data: ', error);
    }
  }

  onFilterProductData(navigator, data) {
    var parsedData = JSON.parse(data._bodyInit);
    console.log('================================ parsedData =================================', parsedData);
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
      this.state.averageRating = parsedData.averageRate;
      this.state.title = parsedData.title;
      this.state.productIngredients = parsedData.ingredientList;
      this.state.isVegan = true;
      this.state.isVegetarian = true;
      this.state.isPescatarian = true;

      if (parsedData.diet['Animal-Derived'] && this.state.diets.indexOf('Vegan') !== -1) {
        this.state.isVegan = false;
      }

      if (this.state.diets.indexOf('Vegetarian') !== -1) {
        if (allergiesProductContains['Shellfish']) {
          this.state.isVegetarian = false;
        }
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

      if (!this.state.favoritedProducts[this.state.title]) {
        this.state.favorited = false;
      } else {
        this.state.favorited = true;
      }

      this.state.allergies.forEach(allergy => {
        if (allergiesProductContains[allergy]) {
          this.state.productAllergies.push(allergy);
          allergiesProductContains[allergy].forEach(allergyItContains => {
            this.state.ingredientsToAvoid.push(allergyItContains);
          });
        }
      });

      this.setState({
        upc: parsedData.upc,
        productImage: parsedData.imgURL,
        grade: parsedData.score,
        productIngredients: parsedData.ingredientList,
        ingredientsToAvoid: this.state.ingredientsToAvoid,
        title: parsedData.title,
        favorited: this.state.favorited
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

  goToProfile(route, navigator) {
    console.log('Inside goToProfile');
    navigator.push({
      page: this.state.pages[6],
      index: 6
    });
    console.log(navigator.getCurrentRoutes());
  }

  goToAllergiesAndDiet(route, navigator) {
    console.log('Inside allergiesanddiet');
    navigator.push({
      page: this.state.pages[2],
      index: 2
    })
  }

  renderActivity() {
    this.state.profilePage = 'Activity';
    this.setState({
      profilePage: this.state.profilePage
    });
  }

  favoriteProduct() {
    this.state.favorited = !this.state.favorited;
    console.log('Is it favorited?', this.state.favorited);
    if (this.state.favorited) {
    //when product is favorited, make sure that you save the productImage in the favoritedProducts object/array
      if (!this.state.favoritedProducts[this.state.title]) {
        this.state.favoritedProducts[this.state.title] = this.state.productImage
        console.log('======================================this.state.favoritedProducts ======================', this.state.favoritedProducts);
      }
    } else {
      //if the product is not favorited anymore
      delete this.state.favoritedProducts[this.state.title];
    }
    console.log('productImage is now', this.state.productImage);
    console.log('title is', this.state.title);

    this.setState({
      favorited: this.state.favorited,
      favoritedProducts: this.state.favoritedProducts
    });
  }

  renderFavoriteProducts() {
    this.state.profilePage = 'Favorite Products';
    this.setState({
      profilePage: this.state.profilePage
    });
  }

  renderFollowing() {
    this.state.profilePage = 'Following';
    this.setState({
      profilePage: this.state.profilePage
    });
  }

  goToSearchResult(route, navigator, data) {
    console.log('=====================inside goToSearch function=================')
    // console.log(data);
    data = JSON.parse(data._bodyInit)


    this.setState({ searchResult: data })
    
    console.log('=======================goToSearchResult state===================', this.state.searchResult)
    navigator.push({
      page: 'SearchResult',
      index: 7
    });
  }

  fetchItemUPC(route, navigator, UPC) {
    console.log('inside fetchItemUPC', UPC)
    fetch('https://murmuring-dusk-10598.herokuapp.com/api/foodfacts/upc', 
    // fetch('http://10.6.24.1:3000/api/foodfacts/upc', 
      {
        method: 'POST',
        headers:
        {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          { event: {data: '0' + UPC} }
        )
      })
    .then(data => {
      console.log(data._bodyInit);
      this.onFilterProductData(navigator, data);
      navigator.push({
        page: 'Summary',
        index: 5
      });

      // {page: 'Summary', index: 5}, navigator
    })
    .catch(err => console.log('err in readBarCode: ', err));
  }

  onForward(route, navigator) {
    let page;
    console.log('in onForward: ', route);

    if (route.index === 2) {
      console.log('Updating user info');
      fetch('https://murmuring-dusk-10598.herokuapp.com/api/user/update', // local server for testing purposes
      {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: this.state.userId,
          username: this.state.username,
          email: this.state.email,
          profilePictUrl: this.state.picture,
          allergies: this.state.allergies,
          diets: this.state.diets
        })
      })
      .then(data => {
        console.log('data received back from server posting is', data);
      })
      .catch(err => console.log('postUserToServer error message is: '));
    }

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
      <NavigatePage username={this.state.username} picture={this.state.picture} following={this.state.following} favoriteProduct={this.favoriteProduct}
      favorited={this.state.favorited} favoritedProducts={this.state.favoritedProducts} renderActivity={this.renderActivity} renderFavoriteProducts={this.renderFavoriteProducts} renderFollowing={this.renderFollowing}
      profilePage={this.state.profilePage} concerns={this.state.concerns} allergies={this.state.allergies} diets={this.state.diets}
      goToProfile={this.goToProfile} goToAllergiesAndDiet={this.goToAllergiesAndDiet} productImage={this.state.productImage} grade={this.state.grade} averageRating={this.state.averageRating}
      shellfish={this.state.Shellfish} peanuts={this.state.Peanuts} animalDerived={this.state.AnimalDerived} soy={this.state.Soy}
      dairy={this.state.Dairy} wheat={this.state.Wheat} corn={this.state.Corn} sulfite={this.state.Sulfite} treeNuts={this.state.TreeNuts}
      nightshades={this.state.Nightshades} egg={this.state.Egg} fish={this.state.Fish} transfat={this.state.Transfat} gluten={this.state.Gluten} flavoring={this.state.Flavoring}
      vegan={this.state.vegan} vegetarian={this.state.vegetarian} pescatarian={this.state.pescatarian}
      isVegan={this.state.isVegan} isVegetarian={this.state.isVegetarian} isPescatarian={this.state.isPescatarian}
      productAllergies={this.state.productAllergies} ingredientsToAvoid={this.state.ingredientsToAvoid} productIngredients={this.state.productIngredients}
      onSelectConcern={this.onSelectConcern} onSelectAllergy={this.onSelectAllergy}
      onSelectDiet={this.onSelectDiet} onFilterProductData={this.onFilterProductData} goToSummary={this.goToSummary} 
      goToSearchResult={this.goToSearchResult} searchResult={this.state.searchResult} fetchItemUPC={this.fetchItemUPC}
      onForward={this.onForward} onBack={this.onBack} rootParent={this}/>
    );
  }
}

AppRegistry.registerComponent('bof', () => bof);
