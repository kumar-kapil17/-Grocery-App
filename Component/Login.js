import React, { Component } from 'react';
import { View, Text,TextInput,StyleSheet ,TouchableOpacity,Image,Alert, KeyboardAvoidingView} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Login extends Component {

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
      // <KeyboardAvoidingView 
      //  keyboardVerticalOffset={Platform.select({ios: 0, android: 10})}
      //   style = {{ flex: 1 }}
      //   behavior= {(Platform.OS === 'ios')? "padding" : null}
      //   style={{flex:1,backgroundColor:'white'}}>
      <View style={{flex:1,backgroundColor:'white'}}>


          <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>

          <Image  source={require('../Component/Images/new.png')} style={{ resizeMode: 'contain',width: 200, height:80,}}>
          </Image>  

          </View>





        <Text style={{fontSize:25,letterSpacing:1,margin:0,marginTop:30,marginLeft:25}}> Welcome! </Text>
        <Text style={{fontSize:16,letterSpacing:1,textAlign:'left',marginLeft:33}}>Get the best from our app  </Text>
      
      
        <ScrollView showsVerticalScrollIndicator={false}>
           <View style={{marginTop:50,height:120,width:'100%'}}>
                    <TextInput
                      placeholder="Email "
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
        
     
        </View>   
  

          <TouchableOpacity style={{justifyContent:'center',height:60,width:'80%',alignSelf:'center',borderRadius:100,backgroundColor:'#49d1c2',marginTop:60,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                      width: 0,
                                      height: 4,
                                    },
                                    shadowOpacity: 0.32,
                                    shadowRadius: 5.46,
                                    
                                    elevation: 9,}}
            //    onPress = {() => Alert.alert('Alert Title') }  
            onPress={() => this.props.navigation.navigate('Profile')} >

              <Text style={{textAlign:'center',fontSize:18,color:'white',letterSpacing:1}}>LOGIN</Text>

          </TouchableOpacity>

         
         
    <View style={{borderBottomColor: 'black',borderBottomWidth: 0,marginTop:90}}></View>
                   
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
