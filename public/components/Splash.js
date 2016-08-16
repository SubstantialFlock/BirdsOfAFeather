import React, { Component, PropTypes } from 'react';
import { Text, TouchableHighlight, View, Image, AsyncStorage } from 'react-native';
var {FBLogin, FBLoginManager} = require('react-native-facebook-login');



const style = require('./../style/styles');

export default class Splash extends Component {
  async getUserFromFB(userId, token) {
    try {
      let url = `https://graph.facebook.com/v2.4/${userId}?fields=id,name,email,friends&access_token=${token}`;
      let response = await fetch(url);
      let responseJson = await response.json();
      let _this = this;
      this.props.rootParent.setState({
        userId: responseJson.id,
        username: responseJson.name,
        friends: responseJson.friends.data
      });
      this.postUserToServer(responseJson);
      this.saveUserData(responseJson);
    } catch(error) {
      console.error(error);
    }
  }

  async postUserToServer(data) {
    fetch('http://10.6.24.31:3000/api/facebook', 
    {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: data.id,
        username: data.name,
        email: data.email,
        friends: data.friends.data
      })
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => console.log(err));
  }

  async saveUserData(data) {
    let multi_set_pairs = [['USERID', JSON.stringify(data.id)], 
                          ['USERNAME', JSON.stringify(data.name)],
                          ['EMAIL', JSON.stringify(data.email)],
                          ['FRIENDS', JSON.stringify(data.friends.data)]];
    try {
      await AsyncStorage.multiSet(multi_set_pairs, (err) => { console.log('here in saveUserData: ', err);});
    } catch (error) {
      console.log('Error saving data: ', error);
    }
  }

  async retrieveUserData (ID) {
    let multi_get_keys = ['USERID','USERNAME', 'EMAIL', 'FRIENDS'];
    try {
      await AsyncStorage.multiGet(multi_get_keys, (err, stores) => {
        console.log('here in retrieveUserData -----  ', stores);
        this.props.rootParent.setState({
          userId: stores[0][1],
          username: stores[1][1],
          email: stores[2][1],
          friends: stores[3][1]
        });
      });
    } catch (error) {
      console.log('Error retrieving data: ', error);
    }
  }

  render() {
    var _this = this;
  	return (
  	  <View style={style.styles.container}>
        <Image
          source={{uri: 'https://elixirgraphics.com/assets/img/theme_images/feather-icon-256x256-NEW.jpg'}}
          style={style.styles.icon}
        />
        <Text style={{height: 50}}>It's easy to get started. Sign in with Facebook to get access to bof.</Text>
        
        <FBLogin style={{ marginBottom: 10, }}
        ref={(fbLogin) => { this.fbLogin = fbLogin }}
        permissions={["email","user_friends"]}
        loginBehavior={FBLoginManager.LoginBehaviors.Native}
        onLogin={function(data){
          _this.getUserFromFB(data.credentials.userId, data.credentials.token);
          _this.props.onForward();
        }}
        onLogout={function(){
          console.log("Logged out.");
          _this.props.rootParent.setState({ 
            userId: null,
            username: null,
            email: null,
            friends: [],
            concerns: [],
            allergies: [],
            diets: [],
            selected: false,
            pages: ['Splash', 'Welcome', 'Allergies/Diet', 'Scan', 'UPCReader', 'Summary'],
            productDescription: {}
          });
          AsyncStorage.clear((err) => {
            if (err) {
              console.log('Error clearing user data: ', err);
            } else {
              console.log('User data cleared');
            }
          });
        }}
        onLoginFound={function(data){
          console.log("Existing login found.");
          console.log(data);
          _this.retrieveUserData(data.credentials.userId);
          // _this.props.onForward();
          AsyncStorage.clear((err) => {
            if (err) {
              console.log('Error clearing user data: ', err);
            } else {
              console.log('User data cleared');
            }
          });
          // _this.props.onForward();
        }}
        onLoginNotFound={function(){
          console.log("No user logged in.");
          _this.props.rootParent.setState({ 
            userId: null,
            username: null,
            email: null,
            friends: [],
            concerns: [],
            allergies: [],
            diets: [],
            selected: false,
            pages: ['Splash', 'Welcome', 'Allergies/Diet', 'Scan', 'UPCReader', 'Summary'],
            productDescription: {}
          });
        }}
        onError={function(data){
          console.log("ERROR");
          console.log(data);
        }}
        onCancel={function(){
          console.log("User cancelled.");
        }}
        onPermissionsMissing={function(data){
          console.log("Check permissions!");
          console.log(data);
        }}
        />
  	  </View>
  	);
  }
}
