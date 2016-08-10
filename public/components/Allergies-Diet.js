import React, { Component, PropTypes } from 'react';
import { Text, TouchableHighlight, View, Image } from 'react-native';
const style = require('./../style/styles');

export default class AllergiesAndDiet extends Component {
  render() {
    return (
      <View>
        <Text>{'\n'}</Text>
        <Text style={{textAlign: 'center', fontFamily: 'Didot-Italic', fontSize: 40}}>Any Allergies?</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Crab')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: 'https://cdn0.iconfinder.com/data/icons/food-icons-rounded/110/Crab-128.png'}}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Peanuts')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: 'https://0.s3.envato.com/files/117161280/Allergen%20Icon%20Package%202/allergen_icons_500px_0001_peanuts.png'}}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={{height: 67, width: 67}} onPress={this.props.onSelectAllergy.bind(this, 'Animal-derived')}>
            <Image style={{height: 67, width: 67, marginLeft: 3, marginRight: 3, marginBottom: 3}} source={require('./../../images/animal-derived-icon.jpg')}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Soy')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: 'https://pixabay.com/static/uploads/photo/2015/10/24/19/36/soy-1004851_960_720.png'}}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Dairy')}>
            <Image style={style.styles.allergyAndDietIcon} source={require('./../../images/cheeseIcon.png')}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Wheat')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: 'https://www.allergenchecker.co.uk/images/icons/cereals_containing_gluten_icon.png'}}></Image>
          </TouchableHighlight>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this,'Corn')}>
            <Image style={style.styles.allergyAndDietIcon} source={require('./../../images/corn-icon.png')}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Sulfite')}>
            <Image style={style.styles.allergyAndDietIcon} source={require('./../../images/wine-glass-flat.png')}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Tree Nuts')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: 'https://0.s3.envato.com/files/117161280/Allergen%20Icon%20Package%202/allergen_icons_500px_0002_tree-nuts.png'}}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Nightshades')}>
            <Image style={style.styles.allergyAndDietIcon} source={require('./../../images/eggplant-icon.jpg')}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Egg')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: 'https://cdn3.iconfinder.com/data/icons/food-icons-3/512/egg-512.png'}}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Fish')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: 'https://cdn4.iconfinder.com/data/icons/chef-s-kitchen/256/icon-fish-512.png'}}></Image>
          </TouchableHighlight>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Trans fat')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: 'https://cdn2.iconfinder.com/data/icons/food-and-kitchen/512/8-512.png'}}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Gluten')}>
            <Image style={style.styles.allergyAndDietIcon} source={require('./../../images/bread-flat.png')}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Flavoring')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: 'https://cdn0.iconfinder.com/data/icons/kitchen-and-cooking/512/spices_seasoning_spice_condiment_ingredient_flat_design_icon-512.png'}}></Image>
          </TouchableHighlight>
        </View>
        <Text style={{textAlign: 'center', fontFamily: 'Didot-Italic', fontSize: 35}}>Any Dietary Concerns?</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectDiet.bind(this, 'Vegan')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: 'https://d2gg9evh47fn9z.cloudfront.net/thumb_COLOURBOX10662022.jpg'}}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectDiet.bind(this, 'Vegetarian')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: 'https://2014mirimstudent424.files.wordpress.com/2014/03/for-vegetarian.png?w=300&h=300'}}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectDiet.bind(this, 'Pescatarian')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: 'https://cdn0.iconfinder.com/data/icons/kitchen-colored-1/60/fish-dish-plate-chopstick-asian-512.png'}}></Image>
          </TouchableHighlight>
        </View>
        <TouchableHighlight style={style.styles.next} onPress={this.props.onForward}>
          <Text style={style.styles.text}>Continue</Text>
        </TouchableHighlight>
        <TouchableHighlight style={style.styles.back} onPress={this.props.onBack}>
          <Text style={style.styles.text}>Go Back</Text>
        </TouchableHighlight>
      </View>
    );
  }
}