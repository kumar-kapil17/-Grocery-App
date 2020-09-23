

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  ImageBackground,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  DismissKeyboardView,
} from 'react-native';
// import {vw, vh} from '../utils/dimensions';


export default class SignUp extends Component {

  static navigationOptions = {
    headerShown: false
}



  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    

    return (
      <View style={styles.container}>
    
         
            <View
              style={{
                width: 0,
                height: 0,
                backgroundColor: 'transparent',
                borderStyle: 'solid',
                borderRightWidth: 550,
                transform: [{scaleX: 1}],
                borderTopWidth: 210,
                borderRightColor: 'transparent',
                borderTopColor: '#49d1c2',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  height: 30,
                  width:375,
                  marginLeft: 0,
                  marginTop: 210,
                }}>
              </View>

              <View style={{justifyContent:'center',alignItems:'center',marginTop:-800}}>

               <Image  source={require('../Component/Images/new.png')} style={{ resizeMode: 'contain',width: 200, height:80,marginLeft:350,tintColor:'white'}}>
              </Image>  

               </View>
              
            </View>

            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 100,
                alignSelf: 'center',
                marginTop: -100,
              }}>
              <ImageBackground
                source={require('./Images/avtar1.jpg')}
                style={{width: 100, height: 100, marginTop: -15,}}
                imageStyle={{borderRadius: 100}}></ImageBackground>
              </View>


    <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{width:'100%',alignSelf:'center',}}>

                   <TextInput
                      placeholder="Name"
                      placeholderTextColor="gray"
                      keyboardType= 'name-phone-pad'
                      maxLength={20}
                      style={styles.input}
                   />

                    <TextInput
                      placeholder="Email"
                      placeholderTextColor="gray"
                      keyboardType= 'name-phone-pad'
                      maxLength={20}
                      style={styles.input}
                   />

                    <TextInput
                      placeholder="Password"
                      placeholderTextColor="gray"
                      keyboardType= 'Number'
                      maxLength={20}
                      secureTextEntry={true}
                      style={styles.input}
                   /> 

                    <TextInput
                      placeholder="Contact No"
                      placeholderTextColor="gray"
                      keyboardType= 'Numeric'
                      maxLength={12}
                      style={styles.input}
                   /> 





          <TouchableOpacity style={{justifyContent:'center',height:60,width:'80%',alignSelf:'center',borderRadius:100,backgroundColor:'#49d1c2',marginTop:30,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                      width: 0,
                                      height: 4,
                                    },
                                    shadowOpacity: 0.32,
                                    shadowRadius: 5.46,
                                    
                                    elevation: 9,}}
                      onPress = {() => Alert.alert('Sign Up Successfully.') }   >

              <Text style={{textAlign:'center',fontSize:18,color:'white',letterSpacing:1}}>SIGN UP NOW!</Text>

          </TouchableOpacity>


          
       <View style={{flexDirection:'row',height:30,width:'100%',justifyContent:'center',marginTop:22}}>
          <Text style={{textAlign:'center',fontSize:16,color:'gray',letterSpacing:1,marginTop:0}}>Already have an account?</Text>
         
        
          <TouchableOpacity 
          // onPress = {() => Alert.alert('Alert Title') }
          onPress={() => this.props.navigation.navigate('Login')} >
           <Text style={{textAlign:'center',marginTop:2,marginLeft:5,color:'#49d1c2',}}>LOGIN</Text>
          </TouchableOpacity>

       </View>
    
        

    </View>

    <View style={{borderBottomColor: 'black',borderBottomWidth: 1,marginTop:10}}></View>
            

           

            
    </ScrollView>
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    height: 'auto',
    // width:375,
    backgroundColor: 'white',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
   
  },
  

  input: {
    fontSize: 18,
    width: '90%',
    height: 50,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    color: 'black',
    alignSelf:'center',
    marginTop:10
  },
});
