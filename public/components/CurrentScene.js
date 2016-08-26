import React, { Component } from 'react';
import Splash from './Splash';
import Welcome from './Welcome';
import Profile from './Profile';
import AllergiesAndDiet from './Allergies-Diet';
import Scan from './Scan';
import UPCReader from './UPCReader';
import Summary from './Summary';
import SearchResult from './SearchResult';

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
        goToProfile={this.props.goToProfile} onSelectConcern={this.props.onSelectConcern} onFinishSelectingConcerns={this.props.onFinishSelectingConcerns}
        rootParent={this.props.rootParent} />
      );
    }

    if (this.props.page === 'Profile') {
      return (
        <Profile username={this.props.username} picture={this.props.picture} following={this.props.following}
        profilePage={this.props.profilePage} renderFavoriteProducts={this.props.renderFavoriteProducts} renderActivity={this.props.renderActivity}
        favoritedProducts={this.props.favoritedProducts} renderFollowing={this.props.renderFollowing}
        goToAllergiesAndDiet={this.props.goToAllergiesAndDiet} onBack={this.props.onBack} rootParent={this.props.rootParent} />
      );
    }

    if (this.props.page === 'Allergies/Diet') {
      return (
        <AllergiesAndDiet onSelectAllergy={this.props.onSelectAllergy} onSelectDiet={this.props.onSelectDiet} 
        shellfish={this.props.shellfish} peanuts={this.props.peanuts} animalDerived={this.props.animalDerived}
        soy={this.props.soy} dairy={this.props.dairy} wheat={this.props.wheat} corn={this.props.corn} sulfite={this.props.sulfite}
        treeNuts={this.props.treeNuts} nightshades={this.props.nightshades} egg={this.props.egg} fish={this.props.fish} transfat={this.props.transfat}
        gluten={this.props.gluten} flavoring={this.props.flavoring} vegan={this.props.vegan} vegetarian={this.props.vegetarian} pescatarian={this.props.pescatarian}
        goToProfile={this.props.goToProfile} onForward={this.props.onForward} onBack={this.props.onBack} rootParent={this.props.rootParent} />
      ); 
    }


    if (this.props.page === 'Scan') {
      return (
        <Scan goToSummary={this.props.goToSummary} goToProfile={this.props.goToProfile} goToSearchResult={this.props.goToSearchResult} goToAllergiesAndDiet={this.props.goToAllergiesAndDiet}
        onForward={this.props.onForward} onBack={this.props.onBack}/>
      );
    }

    if (this.props.page === 'SearchResult') {
      return (
        <SearchResult searchResult={this.props.searchResult} fetchItemUPC={this.props.fetchItemUPC} onForward={this.props.onForward} onBack={this.props.onBack} />
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
        averageRating={this.props.averageRating} isVegan={this.props.isVegan} isVegetarian={this.props.isVegetarian} isPescatarian={this.props.isPescatarian}
        productIngredients={this.props.productIngredients} productAllergies={this.props.productAllergies} ingredientsToAvoid={this.props.ingredientsToAvoid}
        favorited={this.props.favorited} favoriteProduct={this.props.favoriteProduct} goToProfile={this.props.goToProfile} goToAllergiesAndDiet={this.props.goToAllergiesAndDiet}
        onBack={this.props.onBack} rootParent={this.props.rootParent} />
      );
    }
  }
}