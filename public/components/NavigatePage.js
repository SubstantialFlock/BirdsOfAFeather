import React, { Component, PropTypes } from 'react';
import { Navigator } from 'react-native';
import CurrentScene from './CurrentScene';

export default class NavigatePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'hong'
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ page: 'Splash', index: 0}}
        renderScene={(route, navigator) =>
        <CurrentScene
            page={route.page}
            username={this.props.username}
            concerns={this.props.concerns}
            allergies={this.props.allergies}
            diets={this.props.diets}
            selected={this.props.selected}
            productDescription={this.props.productDescription}
            productAllergies={this.props.productAllergies}
            onFilterProductData={this.props.onFilterProductData}
            goToSummary={this.props.goToSummary.bind(this, route, navigator)}
            onForward={this.props.onForward.bind(this, route, navigator)}
            onBack={this.props.onBack.bind(this, route, navigator)}
            onSelectConcern={this.props.onSelectConcern}
            onSelectAllergy={this.props.onSelectAllergy}
            onSelectDiet={this.props.onSelectDiet}
            onFinishSelectingConcerns={this.props.onFinishSelectingConcerns}
            rootParent={this.props.rootParent}
          />
        } 
      />
    );
  }
}

