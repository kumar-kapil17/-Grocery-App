

import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Alert, ImageBackground,Image } from 'react-native';

export default class Register extends Component {

  static navigationOptions = {
    headerShown: false
}



  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>


        <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>

        <Image  source={require('../Component/Images/new.png')} style={{ resizeMode: 'contain',width: 200, height:80,}}>
        </Image>  

        </View>




      <View>

        <Text style={{fontSize:20,letterSpacing:1,textAlign:'center',color:'#49d1c2',marginTop:10}}> Grocery shopping has never  </Text>
        <Text style={{fontSize:20,letterSpacing:1,textAlign:'center',color:'#49d1c2'}}> been this much fun.  </Text>

        </View>

        <TouchableOpacity style={{justifyContent:'center',height:60,width:'80%',alignSelf:'center',borderRadius:100,backgroundColor:'#49d1c2',marginTop:50,
                                  shadowColor: "#000",
                                  shadowOffset: {
                                    width: 0,
                                    height: 4,
                                  },
                                  shadowOpacity: 0.32,
                                  shadowRadius: 5.46,
                                  
                                  elevation: 9,}}
                                  
              // onPress = {() => Alert.alert('Alert Title') }  
              onPress={() => this.props.navigation.navigate('Login')} >

             <Text style={{textAlign:'center',fontSize:18,color:'white',letterSpacing:1}}>LOGIN</Text>

        </TouchableOpacity>

        <Text style={{textAlign:'center',fontSize:16,color:'gray',letterSpacing:1,marginTop:30}}>Don't have an account?</Text>

        <TouchableOpacity style={{justifyContent:'center',height:60,width:'80%',alignSelf:'center',borderRadius:100,marginTop:10,borderWidth:2,borderColor:'#49d1c2'}}
            //   onPress = {() => Alert.alert('Alert Title') }  
              onPress={() => this.props.navigation.navigate('SignUp')} >

             <Text style={{textAlign:'center',fontSize:18,color:'#49d1c2',letterSpacing:1}}>SIGN UP</Text>

        </TouchableOpacity>

        <ImageBackground  source={require('./Images/down1.jpg')} style={{height:180,width:'100%',backgroundColor:'white',}}>

        </ImageBackground>

      </View>
    );
  }
}















