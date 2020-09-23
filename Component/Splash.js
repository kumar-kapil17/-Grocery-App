import React from 'react';
import { StyleSheet, Text, View,Image,ImageBackground } from 'react-native';
// import Home from './Home';
export default class Splash extends React.Component {
  render() {
    const viewStyles = [styles.container, { backgroundColor: 'orange' }];
    const textStyles = {
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold'
    };

    return (
        <View style={{flex:1,}}>
       {/* <View style={viewStyles}> */}
        {/* <Text style={textStyles}>
          Splash Screen
        </Text> */}



            <View style={{flex:1,justifyContent:'center',}}>
                    <ImageBackground
                        source={require('../Component/Images/ora.jpg')}
                        style={{flex: 1,resizeMode: 'cover',}}
                        >

                        <View style={{flex:1,justifyContent:'center',alignItems:'center',alignContent:'center'}}>
                       
                        {/* <Text style={{fontWeight:'bold',fontSize:30,letterSpacing:2,color:'orange',textAlign:'center',}}> Grocery App </Text> */}
                      
                                           
                        <Image source={require('../Component/Images/new.png')}
                       style={{height:150,width:280,resizeMode: 'cover',tintColor:'#365487'}}></Image>
                  
                       
                       
                       
                       
                        </View>

                        {/* <Image source={require('../Component/Images/gro.jpg')}
                       style={{height:100,width:100,resizeMode: 'cover',marginLeft:130,marginTop:250}}></Image>
                      */}
                     </ImageBackground>     
                        
            </View>
            {/* </View> */}
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
  back: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
});



// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#F5FCFF',
//     },
//     welcome: {
//       fontSize: 20,
//       textAlign: 'center',
//       margin: 10,
//     },
//     instructions: {
//       textAlign: 'center',
//       color: '#333333',
//       marginBottom: 5,
//     },
//   });

