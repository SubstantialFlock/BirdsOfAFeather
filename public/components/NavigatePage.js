import React, { Component } from 'react';
import { Navigator } from 'react-native';
import CurrentScene from './CurrentScene';

export default class NavigatePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navigator
        initialRoute={{page: 'Splash', index: 0}}
        renderScene={(route, navigator) =>
        <CurrentScene
            page={route.page}
            username={this.props.username}
            picture={this.props.picture}
            following={this.props.following}
            profilePage={this.props.profilePage}
            goToProfile={this.props.goToProfile.bind(this, route, navigator)}
            goToAllergiesAndDiet={this.props.goToAllergiesAndDiet.bind(this, route, navigator)}
            favorited={this.props.favorited}
            favoriteProduct={this.props.favoriteProduct}
            favoritedProducts={this.props.favoritedProducts}
            renderActivity={this.props.renderActivity}
            renderFavoriteProducts={this.props.renderFavoriteProducts}
            renderFollowing={this.props.renderFollowing}
            concerns={this.props.concerns}
            allergies={this.props.allergies}
            diets={this.props.diets}
            productImage={this.props.productImage}
            grade={this.props.grade}
            averageRating={this.props.averageRating}
            shellfish={this.props.shellfish}
            peanuts={this.props.peanuts}
            animalDerived={this.props.animalDerived}
            soy={this.props.soy}
            dairy={this.props.dairy}
            wheat={this.props.wheat}
            corn={this.props.corn}
            sulfite={this.props.sulfite}
            treeNuts={this.props.treeNuts}
            nightshades={this.props.nightshades}
            egg={this.props.egg}
            fish={this.props.fish}
            transfat={this.props.transfat}
            gluten={this.props.gluten}
            flavoring={this.props.flavoring}
            vegan={this.props.vegan}
            vegetarian={this.props.vegetarian}
            pescatarian={this.props.pescatarian}
            isVegan={this.props.isVegan}
            isVegetarian={this.props.isVegetarian}
            isPescatarian={this.props.isPescatarian}
            productIngredients={this.props.productIngredients}
            productAllergies={this.props.productAllergies}
            ingredientsToAvoid={this.props.ingredientsToAvoid}
            onFilterProductData={this.props.onFilterProductData.bind(this, navigator)}
            goToSummary={this.props.goToSummary.bind(this, route, navigator)}
            onForward={this.props.onForward.bind(this, route, navigator)}
            onBack={this.props.onBack.bind(this, route, navigator)}
            onSelectConcern={this.props.onSelectConcern}
            onSelectAllergy={this.props.onSelectAllergy}
            onSelectDiet={this.props.onSelectDiet}
            onFinishSelectingConcerns={this.props.onFinishSelectingConcerns}
            rootParent={this.props.rootParent}
            goToSearchResult={this.props.goToSearchResult.bind(this, route, navigator)}
            searchResult={this.props.searchResult}
            fetchItemUPC={this.props.fetchItemUPC.bind(this, route, navigator)}
          />
        } 
      />
    );
  }
}

