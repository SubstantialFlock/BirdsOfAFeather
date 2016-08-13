import React, { Component, PropTypes } from 'react';
import Splash from './Splash';
import Welcome from './Welcome';
import AllergiesAndDiet from './Allergies-Diet';
import Scan from './Scan';
import UPCReader from './UPCReader';
import Summary from './Summary';

export default class CurrentScene extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.page === 'Splash') {
      return (
        <Splash onForward={this.props.onForward} rootParent={this.props.rootParent} />
      );
    } 

    if (this.props.page === 'Welcome') {
      return (
        <Welcome onForward={this.props.onForward} onBack={this.props.onBack} username={this.props.username} 
        onSelectConcern={this.props.onSelectConcern} onFinishSelectingConcerns={this.props.onFinishSelectingConcerns}
        rootParent={this.props.rootParent} />
      );
    }

    if (this.props.page === 'Allergies/Diet') {
      return (
        <AllergiesAndDiet onSelectAllergy={this.props.onSelectAllergy} onSelectDiet={this.props.onSelectDiet} 
        selected={this.props.selected} onForward={this.props.onForward} onBack={this.props.onBack} rootParent={this.props.rootParent} />
      ); 
    }


    if (this.props.page === 'Scan') {
      return (
        <Scan goToSummary={this.props.goToSummary} onForward={this.props.onForward} onBack={this.props.onBack}/>
      );
    }

    if (this.props.page === 'UPCReader') {
      return (
        <UPCReader onFilterProductData={this.props.onFilterProductData} onForward={this.props.onForward} onBack={this.props.onBack} />
      );
    }

    if (this.props.page === 'Summary') {
      return (
        <Summary concerns={this.props.concerns} allergies={this.props.allergies} diets={this.props.diets} productImage={this.props.productImage} grade={this.props.grade}
        isVegan={this.props.isVegan} isVegetarian={this.props.isVegetarian} isPescatarian={this.props.isPescatarian}
        productIngredients={this.props.productIngredients} productAllergies={this.props.productAllergies} ingredientsToAvoid={this.props.ingredientsToAvoid}
        onBack={this.props.onBack} />
      );
    }
  }
}