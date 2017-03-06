/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,Alert,
  View,Navigator,AsyncStorage
} from 'react-native';

var Calculator = require('./calculator');
var Settings = require('./settings');

export default class Awe extends Component {
  constructor(props) {
    super(props);
    //let sceneTransitionValue = await AsyncStorage.getItem("SCENE_SELECTED");
    this.state={sceneTransition:"FloatFromRight"};
    this.getSceneTransition();
  }
  async getSceneTransition(){
    try{
      let sceneTransitionValue = await AsyncStorage.getItem("SCENE_SELECTED");
      // Store value to State
      this.setState({
        sceneTransition : sceneTransitionValue
      });
      //return sceneTransitionValue;
       //Alert.alert('test',sceneTransitionValue);
    }catch(error){
      console.log("Hmm, something when wrong when get data..." + error);
    }
  }

  
  render() {
    
    return (
      <Navigator
        configureScene={ this.configureScene }
        initialRoute={{id: 'Canculator'}}
  //       configureScene={(route) => {
  //       if (this.state.sceneTransition=="FloatFromRight") {
  //         return Navigator.SceneConfigs.FloatFromRight;
  //       } else if(this.state.sceneTransition=="FloatFromLeft"){
  //         return Navigator.SceneConfigs.FloatFromLeft;
  //       }else if(this.state.sceneTransition=="FloatFromBottom"){
  //         return Navigator.SceneConfigs.FloatFromBottom;  
  //       }else if(this.state.sceneTransition=="FloatFromBottomAndroid"){
  //          return Navigator.SceneConfigs.FloatFromBottomAndroid; 
  //       }else if(this.state.sceneTransition=="SwipeFromLeft"){
  //         return Navigator.SceneConfigs.SwipeFromLeft;  
  //       }else if(this.state.sceneTransition=="HorizontalSwipeJump"){
  //         return Navigator.SceneConfigs.HorizontalSwipeJump;
  //       }else{
  //         return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
  //       }
  // }}
        renderScene={(route, navigator) => {
      switch (route.id) {
        case 'Canculator':
          return <Calculator navigator={navigator} />
          break;
        case 'Settings':
           return <Settings navigator={navigator} />
          break;
        default:
      }
    }}
      />
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Awe', () => Awe);
