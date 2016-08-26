import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Image } from 'react-native';
const style = require('./../style/styles');

export default class AllergiesAndDiet extends Component {
  render() {
    let shellFishIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!crab')}></Image>;
    let peanutsIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!peanuts')}></Image>;
    let animalDerivedIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!steak')}></Image>;
    let soyIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!soy')}></Image>;
    let dairyIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!cheeseIcon')}></Image>;
    let wheatIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!wheat')}></Image>;
    let cornIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!corn')}></Image>;
    let sulfiteIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!wine-glass-flat')}></Image>;
    let treeNutsIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!treehuts')}></Image>;
    let nightshadesIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!eggplant')}></Image>;
    let eggIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!egg')}></Image>;
    let fishIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!fish')}></Image>;
    let transfatIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!transfat')}></Image>;
    let glutenIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!bread-flat')}></Image>;
    let flavoringIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!flavoring')}></Image>;
    let veganIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!vegan')}></Image>;
    let vegetarianIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!vegetarian')}></Image>;
    let pescatarianIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!pescatarian')}></Image>;

    if (this.props.shellfish) {
      shellFishIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }
    if (this.props.peanuts) {
      peanutsIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }
    if (this.props.animalDerived) {
      animalDerivedIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }
    if (this.props.soy) {
      soyIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }
    if (this.props.dairy) {
      dairyIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }
    if (this.props.wheat) {
      wheatIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }
    if (this.props.corn) {
      cornIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }
    if (this.props.sulfite) {
      sulfiteIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }
    if (this.props.treeNuts) {
      treeNutsIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }
    if (this.props.nightshades) {
      nightshadesIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }
    if (this.props.egg) {
      eggIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }
    if (this.props.fish) {
      fishIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }
    if (this.props.transfat) {
      transfatIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }
    if (this.props.gluten) {
      glutenIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }
    if (this.props.flavoring) {
      flavoringIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }
    if (this.props.vegan) {
      veganIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }
    if (this.props.vegetarian) {
      vegetarianIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }
    if (this.props.pescatarian) {
      pescatarianIcon = <Image style={style.styles.allergyAndDietIcon} source={require('image!selected')}></Image>;
    }

    return (
      <View>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <Text style={{textAlign: 'center', fontFamily: 'Didot-Italic', fontSize: 40}}>Any Allergies?</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Shellfish')}>
            {shellFishIcon}
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Peanuts')}>
            {peanutsIcon}
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Animal-Derived')}>
            {animalDerivedIcon}
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Soy')}>
            {soyIcon}
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Dairy')}>
            {dairyIcon}
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Wheat')}>
            {wheatIcon}
          </TouchableHighlight>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={{marginTop: 15, marginRight: 6, marginBottom: 6, marginLeft: 6}}>Shellfish</Text>
          <Text style={{marginTop: 15, marginRight: 6, marginBottom: 6, marginLeft: 6}}>Peanuts</Text>
          <Text style={{marginTop: 15, marginRight: 15, marginBottom: 6, marginLeft: 6}}>Animal{'\n'}Derived</Text>
          <Text style={{marginTop: 15, marginRight: 25, marginBottom: 6, marginLeft: 6}}>Soy</Text>
          <Text style={{marginTop: 15, marginRight: 24, marginBottom: 6, marginLeft: 6}}>Dairy</Text>
          <Text style={{marginTop: 15, marginRight: 6, marginBottom: 6, marginLeft: 6}}>Wheat</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Corn')}>
            {cornIcon}
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Sulfite')}>
            {sulfiteIcon}
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Tree Nuts')}>
            {treeNutsIcon}
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Nightshades')}>
            {nightshadesIcon}
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Egg')}>
            {eggIcon}
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Fish')}>
            {fishIcon}
          </TouchableHighlight>
        </View>
        <View style={{flex: 0.8, flexDirection: 'row'}}>
          <Text style={{marginTop: 15, marginRight: 22, marginBottom: 6, marginLeft: 14}}>Corn</Text>
          <Text style={{marginTop: 15, marginRight: 6, marginBottom: 6, marginLeft: 6}}>Sulfite</Text>
          <Text style={{marginTop: 15, marginRight: 4, marginBottom: 6, marginLeft: 6}}>Tree Nuts</Text>
          <Text style={{marginTop: 15, marginRight: 6, marginBottom: 6, marginLeft: 6}}>Nightshades</Text>
          <Text style={{marginTop: 15, marginRight: 15, marginBottom: 6, marginLeft: 6}}>Egg</Text>
          <Text style={{marginTop: 15, marginRight: 6, marginBottom: 6, marginLeft: 6}}>Fish</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Trans fat')}>
            {transfatIcon}
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Gluten')}>
            {glutenIcon}
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectAllergy.bind(this, 'Flavoring')}>
            {flavoringIcon}
          </TouchableHighlight>
        </View>
        <View style={{flex: 0.8, flexDirection: 'row'}}>
          <Text style={{marginTop: 15, marginRight: 6, marginBottom: 6, marginLeft: 6}}>Trans fat</Text>
          <Text style={{marginTop: 15, marginRight: 6, marginBottom: 6, marginLeft: 6}}>Gluten</Text>
          <Text style={{marginTop: 15, marginRight: 6, marginBottom: 6, marginLeft: 6}}>Flavoring</Text>
        </View>
        <Text>{'\n'}</Text>
        <Text style={{textAlign: 'center', fontFamily: 'Didot-Italic', fontSize: 35}}>Any Dietary Concerns?</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectDiet.bind(this, 'Vegan')}>
            {veganIcon}
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectDiet.bind(this, 'Vegetarian')}>
            {vegetarianIcon}
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.allergyAndDietIcon} onPress={this.props.onSelectDiet.bind(this, 'Pescatarian')}>
            {pescatarianIcon}
          </TouchableHighlight>
        </View>
        <View style={{flex: 0.8, flexDirection: 'row'}}>
          <Text style={{marginTop: 15, marginRight: 6, marginBottom: 6, marginLeft: 6}}>Vegan</Text>
          <Text style={{marginTop: 15, marginRight: 6, marginBottom: 6, marginLeft: 6}}>Vegetarian</Text>
          <Text style={{marginTop: 15, marginRight: 6, marginBottom: 6, marginLeft: 6}}>Pescatarian</Text>
        </View>
        <Text>{'\n'}</Text>
        <Text>{'\n'}</Text>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <TouchableHighlight style={style.styles.back} onPress={this.props.onBack}>
            <Text style={style.styles.navigationText}>Back</Text>
          </TouchableHighlight>
          <TouchableHighlight style={style.styles.next} onPress={this.props.onForward}>
            <Text style={style.styles.navigationText}>Continue</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
