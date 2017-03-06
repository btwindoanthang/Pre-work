import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,Button,Picker,AsyncStorage,
  View,Navigator,TouchableHighlight,Alert
} from 'react-native';


class Settings extends Component {
  constructor(props) {
    super(props);
    //let sceneTransitionValue = await AsyncStorage.getItem("SCENE_SELECTED");
    this.state={sceneTransition:"FloatFromRight"};
  }
  setSelectSceneTransition(scene){
    try {
      this.setSceneTransition(scene);
      this.setState({
        scene: scene
      });

    } catch (error) {
      console.log("Oop!! Something went wrong !!!" + error);
    }
  }
  async setSceneTransition(scene){
    try{
      await AsyncStorage.setItem('SCENE_SELECTED', scene);
      this.setState({
        sceneTransition : scene
      })
      Alert.alert("test",AsyncStorage.getItem(SCENE_SELECTED));
    }catch(error){
       
       console.log("Hmm, something when wrong when set data..." + error);
    }
  }
  async getSceneTransition(){
    try{
      let sceneTransitionValue = await AsyncStorage.getItem("SCENE_SELECTED");
      // Store value to State
      this.setState({
        sceneTransition : sceneTransitionValue
      });
    }catch(error){
      console.log("Hmm, something when wrong when get data..." + error);
    }
  }
  componentDidMount(){
    this.getSceneTransition();
  }
  render() {

    onButtonPress = ()=>{
      this.props.navigator.pop();
    }
    return (
      <View style={{marginTop:10,marginLeft:10,marginRight:10}}>
          <Button
          onPress={onButtonPress}
          title="Go back"
          color="#841584"
        />
        <Text style={{fontSize:20}}>Scene Transitions</Text>
          <Picker
            selectedValue={this.state.sceneTransition}
            onValueChange={(scene) => this.setSelectSceneTransition(scene)}>
            <Picker.Item label="FloatFromRight" value="FloatFromRight" />
            <Picker.Item label="FloatFromLeft" value="FloatFromLeft" />
            <Picker.Item label="FloatFromBottom" value="FloatFromBottom" />
            <Picker.Item label="FloatFromBottomAndroid" value="FloatFromBottomAndroid" />
            <Picker.Item label="SwipeFromLeft" value="SwipeFromLeft" />
            <Picker.Item label="HorizontalSwipeJump" value="HorizontalSwipeJump" />
            <Picker.Item label="HorizontalSwipeJumpFromRight" value="HorizontalSwipeJumpFromRight" />
          </Picker>
      </View>
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

module.exports = Settings;