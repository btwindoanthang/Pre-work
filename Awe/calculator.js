import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,Button,Alert,TextInput,
  View,Navigator,TouchableHighlight,SegmentedControlIOS
} from 'react-native';


class Calculator extends Component {
	constructor(props) {
    super(props);
    this.state = { billAmount: 0,tiplAmount:0,precent:10,precent2:0.1,result:0 };
  }
  render() {
  	const onButtonPress = () => {
		  this.props.navigator.push({
		      id: 'Settings'
		    })
		};
	onChangeCalculateTotal =(billAmount) =>{
		this.setState({billAmount:billAmount});
		this.setState({tiplAmount:(billAmount*this.state.precent)/100});
		this.setState({result:parseInt(billAmount)+parseInt((billAmount*this.state.precent)/100)});
	};
	_onChange = (event) => {
		var key = 10;
    if(event.nativeEvent.selectedSegmentIndex==0){
    	key =10;	
    }else if(event.nativeEvent.selectedSegmentIndex ==1){
    	key = 15;
    }else{
    	key =50;
    }
    this.setState({precent:key});
    this.setState({precent2:key/100});
	this.setState({tiplAmount:(this.state.billAmount*key)/100});
	this.setState({result:parseInt(this.state.billAmount)+parseInt((this.state.billAmount*key)/100)});
  };	
    return (
      <View style={{marginTop:10,marginLeft:10,marginRight:10}} >
        <Button
          onPress={onButtonPress}
          title="Settings"
          color="#841584"
          
        />
        <Text style={{fontSize:20}}>Tip Canlculator</Text>
        
        <TextInput
	        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
	       onChangeText={(billAmount) => onChangeCalculateTotal(billAmount)}
		   keyboardType='numeric'
		   maxLength={10}
	      />
	      <Text style={styles.welcome} >
           Tip Amount: {this.state.tiplAmount}
        </Text>
		 <SegmentedControlIOS  values={['10%', '15%', '50%']} selectedIndex={0} onChange={_onChange} />
		 <Text style={styles.welcome} >
           Bill Amount: {this.state.billAmount}
        </Text>
        <Text style={styles.welcome}>
           Tip Amount: {this.state.tiplAmount}
        </Text>
        <Text style={styles.welcome}>
           Precent: {this.state.precent2}
        </Text >
        <Text style={styles.welcome}>
           Result: {this.state.result}
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
    //backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Calculator;