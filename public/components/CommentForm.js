import React, { Component } from 'react';
import { Text, TouchableHighlight, View, Image, TextInput } from 'react-native';
import StarRating from 'react-native-star-rating';
var t = require('tcomb-form-native');
var Form = t.form.Form;
var Comment = t.struct({
  Comment: t.String              // a required string
});

var options = {
  fields: {
    Comment: {
      auto: 'none',
      placeholder: 'Please add a comment',
      multiline: true,
      style: {height: 300},
    }

  }
};


export default class CommentForm extends Component {

  onStarRatingPress(rating) {
    this.props.rootParent.setState({
      myRating: rating
    });
    console.log('here is my rating ', rating );
  }

  render() {
    let _this = this;
  	return (
  		<View>
        <Text style={{textAlign: 'center', fontSize: 20, fontFamily: 'Didot-Italic', marginTop: 40, color: '#995c00'}}>Rate this product:</Text>
        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
          <View style={{width: 130}}></View>
          <StarRating 
            disabled={false}
            maxStars={5}
            rating={this.props.rootParent.state.myRating}
            selectedStar={(rating) => _this.onStarRatingPress(rating)}
            starColor={'#ffd700'}
            emptyStarColor={'#ffe699'}
            starSize={30}
          />
          <View style={{width: 130}}></View>
        </View>
        <Text>{'\n'}</Text>
        <View style={{
                  width: 280,
                  borderWidth: 0,
                  borderRadius: 8,
                  alignSelf: 'center',
                  justifyContent: 'space-between'}} >
    			<Form
            ref="form"
            type={Comment}
            options={options}
          />
        </View>
        <TouchableHighlight style={{height: 36,
                                  width: 180,
                                  backgroundColor: '#48BBEC',
                                  borderColor: '#48BBEC',
                                  borderWidth: 1,
                                  borderRadius: 8,
                                  marginBottom: 10,
                                  alignSelf: 'center',
                                  justifyContent: 'center'}} 
                            underlayColor='#99d9f4'
	                          onPress={() => { 
	                          					let value = this.refs.form.getValue();
	                          					this.props.addComment(value);}} >
          <Text style={{
                        fontSize: 18,
                        color: 'white',
                        alignSelf: 'center'
                      }}>Add Comment</Text>
        </TouchableHighlight>
      </View>
  	)
  }
}