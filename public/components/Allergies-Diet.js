import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Image } from 'react-native';
const style = require('./../style/styles');

export default class AllergiesAndDiet extends Component {
  render() {
    let shellFishIcon = 'https://cdn0.iconfinder.com/data/icons/food-icons-rounded/110/Crab-128.png';
    let peanutsIcon = 'https://0.s3.envato.com/files/117161280/Allergen%20Icon%20Package%202/allergen_icons_500px_0001_peanuts.png';
    let animalDerivedIcon = 'https://cdn4.iconfinder.com/data/icons/chef-s-kitchen/256/icon-steak-512.png';
    let soyIcon = 'https://pixabay.com/static/uploads/photo/2015/10/24/19/36/soy-1004851_960_720.png';
    let dairyIcon = 'http://icons.iconarchive.com/icons/webalys/kameleon.pics/256/Cheese-icon.png';
    let wheatIcon = 'https://www.allergenchecker.co.uk/images/icons/cereals_containing_gluten_icon.png';
    let cornIcon = 'https://cdn0.iconfinder.com/data/icons/food-icons-rounded/110/Corn-512.png';
    let sulfiteIcon = 'http://www.freeiconspng.com/uploads/wine-icon-22.png';
    let treeNutsIcon = 'https://0.s3.envato.com/files/117161280/Allergen%20Icon%20Package%202/allergen_icons_500px_0002_tree-nuts.png';
    let nightshadesIcon = 'http://us.123rf.com/450wm/angelp/angelp1606/angelp160600050/57842125-eggplant-icon-flat-design-vector-illustration.jpg?ver=6';
    let eggIcon = 'https://cdn3.iconfinder.com/data/icons/food-icons-3/512/egg-512.png';
    let fishIcon = 'https://cdn4.iconfinder.com/data/icons/chef-s-kitchen/256/icon-fish-512.png';
    let transfatIcon = 'https://cdn2.iconfinder.com/data/icons/food-and-kitchen/512/8-512.png';
    let glutenIcon = 'http://i1.istockimg.com/file_thumbview_approve/76293945/5/stock-illustration-76293945-bread-loaf-colored-vector-icon.jpg';
    let flavoringIcon = 'https://cdn0.iconfinder.com/data/icons/kitchen-and-cooking/512/spices_seasoning_spice_condiment_ingredient_flat_design_icon-512.png';
    let veganIcon = 'https://d2gg9evh47fn9z.cloudfront.net/thumb_COLOURBOX10662022.jpg';
    let vegetarianIcon = 'https://2014mirimstudent424.files.wordpress.com/2014/03/for-vegetarian.png?w=300&h=300';
    let pescatarianIcon = 'https://cdn0.iconfinder.com/data/icons/kitchen-colored-1/60/fish-dish-plate-chopstick-asian-512.png';

    if (this.props.shellfish) {
      shellFishIcon = 'http://www.maaii.com/assets/images/ok.png';
    }
    if (this.props.peanuts) {
      peanutsIcon = 'http://www.maaii.com/assets/images/ok.png';
    }
    if (this.props.animalDerived) {
      animalDerivedIcon = 'http://www.maaii.com/assets/images/ok.png';
    }
    if (this.props.soy) {
      soyIcon = 'http://www.maaii.com/assets/images/ok.png';
    }
    if (this.props.dairy) {
      dairyIcon = 'http://www.maaii.com/assets/images/ok.png';
    }
    if (this.props.wheat) {
      wheatIcon = 'http://www.maaii.com/assets/images/ok.png';
    }
    if (this.props.corn) {
      cornIcon = 'http://www.maaii.com/assets/images/ok.png';
    }
    if (this.props.sulfite) {
      sulfiteIcon = 'http://www.maaii.com/assets/images/ok.png';
    }
    if (this.props.treeNuts) {
      treeNutsIcon = 'http://www.maaii.com/assets/images/ok.png';
    }
    if (this.props.nightshades) {
      nightshadesIcon = 'http://www.maaii.com/assets/images/ok.png';
    }
    if (this.props.egg) {
      eggIcon = 'http://www.maaii.com/assets/images/ok.png';
    }
    if (this.props.fish) {
      fishIcon = 'http://www.maaii.com/assets/images/ok.png';
    }
    if (this.props.transfat) {
      transfatIcon = 'http://www.maaii.com/assets/images/ok.png';
    }
    if (this.props.gluten) {
      glutenIcon = 'http://www.maaii.com/assets/images/ok.png';
    }
    if (this.props.flavoring) {
      flavoringIcon = 'http://www.maaii.com/assets/images/ok.png';
    }
    if (this.props.vegan) {
      veganIcon = 'http://www.maaii.com/assets/images/ok.png';
    }
    if (this.props.vegetarian) {
      vegetarianIcon = 'http://www.maaii.com/assets/images/ok.png';
    }
    if (this.props.pescatarian) {
      pescatarianIcon = 'http://www.maaii.com/assets/images/ok.png';
    }

    return (
      <View>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <Text style={{textAlign: 'center', fontFamily: 'Didot-Italic', fontSize: 40}}>Any Allergies?</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Shellfish')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: shellFishIcon}}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Peanuts')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: peanutsIcon}}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Animal-Derived')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: animalDerivedIcon}}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Soy')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: soyIcon}}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Dairy')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: dairyIcon}}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Wheat')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: wheatIcon}}></Image>
          </TouchableHighlight>
        </View>
        <View style={{flex: 0.6, flexDirection: 'row'}}>
          <Text style={{margin: 6}}>Shellfish</Text>
          <Text style={{marginTop: 6, marginRight: 14, marginBottom: 6, marginLeft: 6}}>Peanuts</Text>
          <Text style={{marginTop: 6, marginRight: 15, marginBottom: 6, marginLeft: 6}}>Animal{'\n'}Derived</Text>
          <Text style={{marginTop: 6, marginRight: 25, marginBottom: 6, marginLeft: 6}}>Soy</Text>
          <Text style={{marginTop: 6, marginRight: 24, marginBottom: 6, marginLeft: 6}}>Dairy</Text>
          <Text style={{margin: 6}}>Wheat</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Corn')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: cornIcon}}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Sulfite')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: sulfiteIcon}}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Tree Nuts')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: treeNutsIcon}}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Nightshades')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: nightshadesIcon}}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Egg')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: eggIcon}}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Fish')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: fishIcon}}></Image>
          </TouchableHighlight>
        </View>
        <View style={{flex: 0.4, flexDirection: 'row'}}>
          <Text style={{marginTop: 6, marginRight: 22, marginBottom: 6, marginLeft: 14}}>Corn</Text>
          <Text style={{margin: 6}}>Sulfite</Text>
          <Text style={{marginTop: 6, marginRight: 4, marginBottom: 6, marginLeft: 6}}>Tree Nuts</Text>
          <Text style={{margin: 6}}>Nightshades</Text>
          <Text style={{marginTop: 6, marginRight: 15, marginBottom: 6, marginLeft: 6}}>Egg</Text>
          <Text style={{margin: 6}}>Fish</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Trans fat')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: transfatIcon}}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={{height: 57, width: 57, marginTop: 0, marginLeft: 3, marginRight: 3}} onPress={this.props.onSelectAllergy.bind(this, 'Gluten')}>
            <Image style={{height: 57, width: 57, marginTop: 10, marginLeft: 7, marginRight: 3}} source={{uri: glutenIcon}}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Flavoring')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: flavoringIcon}}></Image>
          </TouchableHighlight>
        </View>
        <View style={{flex: 0.4, flexDirection: 'row'}}>
          <Text style={{margin: 6}}>Trans fat</Text>
          <Text style={{margin: 6}}>Gluten</Text>
          <Text style={{margin: 6}}>Flavoring</Text>
        </View>
        <Text style={{textAlign: 'center', fontFamily: 'Didot-Italic', fontSize: 35}}>Any Dietary Concerns?</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectDiet.bind(this, 'Vegan')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: veganIcon}}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectDiet.bind(this, 'Vegetarian')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: vegetarianIcon}}></Image>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectDiet.bind(this, 'Pescatarian')}>
            <Image style={style.styles.allergyAndDietIcon} source={{uri: pescatarianIcon}}></Image>
          </TouchableHighlight>
        </View>
        <View style={style.styles.container}>
          <TouchableHighlight style={style.styles.next} onPress={this.props.onForward}>
            <Text style={style.styles.text}>Continue</Text>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.back} onPress={this.props.onBack}>
            <Text style={style.styles.text}>Go Back</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}