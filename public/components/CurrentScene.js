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
        <Splash onForward={this.props.onForward}/>
      );
    }

    if (this.props.page === 'Welcome') {
      return (
        <Welcome onForward={this.props.onForward} onBack={this.props.onBack} username={this.props.username} 
        onSelectConcern={this.props.onSelectConcern} onFinishSelectingConcerns={this.props.onFinishSelectingConcerns}/>
      );
    }

    if (this.props.page === 'Allergies/Diet') {
      return (
        <AllergiesAndDiet onSelectAllergy={this.props.onSelectAllergy} onSelectDiet={this.props.onSelectDiet}
        onForward={this.props.onForward} onBack={this.props.onBack}/>
      );
    }

    if (this.props.page === 'Scan') {
      return (
        <Scan goToSummary={this.props.goToSummary} onForward={this.props.onForward} onBack={this.props.onBack}/>
      );
    }

    if (this.props.page === 'UPCReader') {
      return (
        <UPCReader onForward={this.props.onForward} onBack={this.props.onBack} />
      );
    }

    if (this.props.page === 'Summary') {
      return (
        <Summary concerns={this.props.concerns} allergies={this.props.allergies} diets={this.props.diets} productDescription={this.props.productDescription} 
        onBack={this.props.onBack} />
      );
    }
  }
}