import React, { Component } from 'react';
import { Text, TouchableHighlight, ListView, Image, StyleSheet } from 'react-native';
import { View } from 'react-native';
import CommentForm from './CommentForm';
import StarRating from 'react-native-star-rating';

const _ = require('lodash');
const Accordion = require('react-native-accordion');
const style = require('./../style/styles');
const Dimensions = require('Dimensions');
const Viewport = Dimensions.get('window');
const ds1 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const ds2 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


export default class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      count: 0,
      ingrediantsDataSource: ds1.cloneWithRows(_.range(1)),
      commentsDataSource: ds2.cloneWithRows(this.props.rootParent.state.comments)
    };
  }

  componentWillReceiveProps(nextProps) { 
    this.setState({ commentsDataSource: ds2.cloneWithRows(nextProps.rootParent.state.comments)});
  }

  renderRow(productIngredients) {
    var header = (
      <View style={{backgroundColor: 'grey'}}>
        <Text style={{fontFamily: 'Didot-Italic', textAlign: 'center', color: 'white', height: 40, fontSize: 20}}>Click for all ingredients</Text>
      </View>
    );
    var content = (
      <View>
        <Text style={{fontFamily: 'Didot-Italic', textAlign: 'center'}}>{productIngredients}</Text>
      </View>
    );

    return (
      <Accordion
        header={header}
        content={content}
        easing='easeOutCubic'
      />
    );
  }

  _isFollowing(userid, username) {
    if (this.props.rootParent.state.following[userid] !== undefined) {
      return (
        <TouchableHighlight onPress={this._follow.bind(this, userid, username)}>
          <Image
            style={{padding: 10, height: 25, width: 88}}
            source={require('image!following')}
          />
        </TouchableHighlight>
      );
    } else {
      return(
        <TouchableHighlight onPress={this._follow.bind(this, userid, username)}>
          <Image
            style={{padding: 10, height: 25, width: 88}}
            source={require('image!follow')}
          />
        </TouchableHighlight> 
      );
    }
  }

  _follow(userid, username) {
    let newFollowing = this.props.rootParent.state.following;
    if (this.props.rootParent.state.following[userid] !== undefined) {
      delete newFollowing[userid];
    } else {
      newFollowing[userid] = username;
    }
    this.props.rootParent.setState({following: newFollowing});
    console.log(`here in follow:  `, this.props.rootParent.state.following);
    this.setState({count: this.state.count + 1});
  }

  _renderComment(comment) {
    if (!comment) {
      return;
    }
    return (
      <View style={{marginLeft: 10}}>
        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
          <Text>{`${comment.userName}:  `}</Text>
          {this._isFollowing(comment.userId, comment.userName)}
        </View>
        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
          <StarRating 
                disabled={true}
                maxStars={5}
                rating={comment.rating}
                starColor={'#FFD700'}
                selectedStar={(rating) => {console.log(`Average user rating is ${rating}`)}}
                emptyStarColor={'#ffe699'}
                starSize={15}
          />
          <View style={{width: 100}}></View>
        </View>
        <Text style={{fontFamily: 'Didot-Italic', textAlign: 'left'}}>{`${comment.comment}`}</Text>
        <Text>{`(${comment.time})\n `}</Text>
      </View>
    );
  }

  _addComment(value) {
    this.clearForm();
    let newComment = {
      userId: this.props.rootParent.state.userId,
      userName: this.props.rootParent.state.username,
      comment: value.Comment,
      rating: this.props.rootParent.state.myRating,
      time: new Date()
    };
    let comments = this.props.rootParent.state.comments
    comments.unshift(newComment);
    this.props.rootParent.setState({ comments });
    newComment.upc = this.props.rootParent.state.upc;
    fetch('https://murmuring-dusk-10598.herokuapp.com/api/product/addComm',
      {
        method: 'POST',
        headers:
        {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newComment)
      })
    .then(data => {
      console.log('returned added comment  ', data);
    })
    .catch(err => console.log(err));
  }

  onChange(value) {
    this.setState({ value });
  }

  clearForm() {
    this.setState({ value: null });
  }

  _renderHeader() {
    let favoriteProductIcon = 'http://www.clipartbest.com/cliparts/LiK/kxa/LiKkxa9ia.png';
    if (this.props.favorited) {
      favoriteProductIcon = 'http://cliparts.co/cliparts/rcL/xGB/rcLxGBBni.png';
    }
    let dietIcon;
    if (!this.props.isVegan) {
      dietIcon = <Image style={{height: 30, width: 30, marginLeft: 8}} source={{uri: 'http://pythagoreancrank.com/wp-content/uploads/2013/09/OrganicNotVegan.png'}}></Image>;
    } else if (!this.props.isVegetarian) {
      dietIcon = <Image style={{height: 30, width: 30, marginLeft: 8}} source={require('image!non-veg-icon')}></Image>;
    } else if (!this.props.isPescatarian) {
      dietIcon = <Image style={{height: 30, width: 30, marginLeft: 8}} source={require('image!not-pescatarian-icon')}></Image>;
    } else {
      dietIcon = <Text style={{fontFamily: 'Didot-Italic', marginLeft: 8}}>Does not conflict with your diet</Text>;
    }
    let ingredientsToAvoid = 'No bad ingredients!';
    if (this.props.ingredientsToAvoid.length > 1) {
      const uniqAvoidIngredients = _.uniq(this.props.ingredientsToAvoid);
      ingredientsToAvoid = this.addComma(uniqAvoidIngredients);
    }
    const allIngredients = this.addComma(this.props.productIngredients);
    let productAllergies = 'No allergens found';
    if (this.props.productAllergies.length > 0) {
      productAllergies = this.addComma(this.props.productAllergies);
    }
    return (
      <View>
        <View style={{marginTop: 10, marginRight: 10, flexDirection: 'row', justifyContent: 'flex-end'}}>
          <TouchableHighlight onPress={this.props.goToAllergiesAndDiet}>
            <Image style={{height: 50, width: 50}} source={require('image!menu')}></Image>
          </TouchableHighlight>
        </View>
        <View style={{flexDirection: 'column', marginLeft: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Image source={{uri: this.props.productImage }} style={{height: 150, width: 150}}></Image>
            <View style={{backgroundColor: '#00e6b8', height: 160, width: 160, borderRadius: 160 / 2, marginLeft: 50}}>
              <View style={{width: 100, marginLeft: 30}}>
                <Text style={{textAlign: 'center', fontSize: 30, fontFamily: 'Didot-Italic', color: 'white', marginTop: 40}}>Grade:</Text>
                <Text style={{textAlign: 'center', fontSize: 30, fontFamily: 'Didot-Italic', color: 'white'}}>{this.props.grade}</Text>
              </View>
              <TouchableHighlight style={{height: 30, width: 43, marginLeft: 120, marginBottom: 20}} onPress={this.props.favoriteProduct}>
                <Image source={{uri: favoriteProductIcon}} style={{height: 39, width: 43}}></Image>
              </TouchableHighlight>
            </View>
          </View>
          <Text>{'\n'}</Text>
          <Text style={{fontSize: 20, fontFamily: 'Didot-Italic', marginLeft: 10}}>Allergies</Text>
          <Text style={{color: 'red', fontFamily: 'Didot-Italic', marginLeft: 10}}>{productAllergies}</Text>
          <Text>{'\n'}</Text>
          <Text style={{fontSize: 20, fontFamily: 'Didot-Italic', marginLeft: 10}}>Dietary Concerns</Text>
        </View>
        <View style={{flex: 0.5, flexDirection: 'row'}}>
          {dietIcon}
        </View>
        <Text>{'\n'}</Text>
        <View style={{flex: 0.5, flexDirection: 'row'}}>
          <Text style={{fontSize: 20, fontFamily: 'Didot-Italic', marginLeft: 10}}>Ingredients To Avoid</Text>
        </View>
        <Text style={{color: 'red', fontFamily: 'Didot', textAlign: 'center'}}>{ingredientsToAvoid}</Text>
        <Text>{'\n'}</Text>
        <ListView
          dataSource={this.state.ingrediantsDataSource}
          renderRow={this.renderRow.bind(this, allIngredients)}
          enableEmptySections={true}
        />
        <View style={{width: 400, marginLeft: 30, alignItems: 'center'}}>
          <Text style={{textAlign: 'center', fontSize: 20, fontFamily: 'Didot-Italic', marginTop: 40, color: '#995c00'}}>Average Rating:</Text>
          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <View style={{width: 100}}></View>
            <StarRating 
              disabled={true}
              maxStars={5}
              rating={this.props.rootParent.state.averageRating}
              starColor={'#FFD700'}
              selectedStar={(rating) => {console.log(`Average user rating is ${rating}`)}}
              emptyStarColor={'#ffe699'}
              starSize={30}
            />
            <View style={{width: 130}}></View>
          </View>
        </View>
        <Text>    </Text>
        <CommentForm addComment={this._addComment.bind(this)} rootParent={this.props.rootParent} />
      </View>
    );
  }

  addComma(ingredients) {
    let ingredientsWithComma = '';
    const ingredientsLength = ingredients.length;

    ingredients.map((ingredient, index) => {
      if (index !== ingredientsLength - 1) {
        ingredientsWithComma += ingredient + ',  ';
      } else {
        ingredientsWithComma += ingredient;
      }
    });
    return ingredientsWithComma;
  }

  render() {
    return (
      <View>
        <View style={{height: 20}}></View>
        <ListView style={{height: Viewport.height}}
          dataSource={this.state.commentsDataSource}
          renderRow={this._renderComment.bind(this)}
          renderHeader={this._renderHeader.bind(this)}
          enableEmptySections={true}
        />
          
      </View>
    );
  }
}
