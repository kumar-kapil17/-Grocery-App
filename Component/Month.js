import React, { Component } from 'react'
import { Text, View, ScrollView,
    ImageBackground,Image,
    TouchableOpacity,
    StyleSheet,
    TouchableNativeFeedback,
    
} from 'react-native'

import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'

export default class month extends Component {

  navigationOptions= () => ({
    headerShown: false,
  })
    render() {
        return (
<View style={{flex:1,backgroundColor:'white'}}>
              
              
                <View style={{height:60,width:'100%'}}>
                <Text style={{fontSize:25,fontWeight:'bold',marginLeft:0,marginTop:10,textAlign:'center'}}>Monthly Essentials</Text>
                </View>

 <ScrollView
 showsVerticalScrollIndicator={false}>
           

              <View style={{borderBottomColor: 'black',borderBottomWidth: 1,marginTop:0}}></View>
             
             
             <View style={{flexDirection:'row',height:150,width:'100%',marginTop:3,}}>

            <View style={{height:145,width:'50%',marginTop:3,}} >

              <View style={{height:15,width:35,borderColor:'green',marginLeft:10,marginTop:5,borderWidth:.3}}>
              <Text style={{fontSize:10,color:'green',marginLeft:2,}}> 4.1 <Icon name="star" size={10} style={{color:'green'}} /></Text>
              </View>
              <Text style={{fontSize:10,marginLeft:50,marginTop:-15,color:'gray'}}>13546 Ratings</Text>

           <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Saffola')}>
           <ImageBackground  source={require('../Component/Images/safola.png')} style={{ resizeMode: 'contain',width: '90%', height: '90%',marginTop:10}}>
           </ImageBackground>
           </TouchableOpacity>
           

            {/* <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',}}> Amul Butter:200 gms</Text> */}
            
            </View>
            <View style={{height:145,width:'50%',marginTop:3,}} >
                
           
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:20}}> Saffola Oil:5 ltr</Text>
            
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:80,marginTop:10}}>$10.00 </Text>
            
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:50,marginTop:10}}>Save $2.00 </Text>
            
            <TouchableOpacity
                style={[styles.buttonContainer, styles.loginButton]}>
                <Text style={styles.loginText}>Add To Cart</Text>
           </TouchableOpacity>
            </View>

            </View>

            

           

              <View style={{flexDirection:'row',borderBottomColor: 'black',borderBottomWidth: 1,}}></View>
              <View style={{flexDirection:'row',height:150,width:'100%',marginTop:3,}}>

            <View style={{height:145,width:'50%',marginTop:3,}} >

            <View style={{height:15,width:35,borderColor:'green',marginLeft:10,marginTop:5,borderWidth:.3}}>
              <Text style={{fontSize:10,color:'green',marginLeft:2,}}> 4.1 <Icon name="star" size={10} style={{color:'green'}} /></Text>
            </View>
            <Text style={{fontSize:10,marginLeft:50,marginTop:-15,color:'gray'}}>15679 Ratings</Text>

          <TouchableNativeFeedback
           onPress={() => this.props.navigation.navigate('Fortune')}>
           <ImageBackground  source={require('../Component/Images/fort.jpg')} style={{ resizeMode: 'contain',width: '80%', height: '90%',marginTop:10,marginLeft:15}}>
           </ImageBackground>
           </TouchableNativeFeedback>

            {/* <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',}}> Amul Butter:200 gms</Text> */}
            
            </View>
            <View style={{height:145,width:'50%',marginTop:3,}} >
                
           
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:15}}> Fortune Oil:1 ltr</Text>
            
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:80,marginTop:10}}>$1.5.00 </Text>
            
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:40,marginTop:10}}>Save $0.5.00 </Text>
            
            <TouchableOpacity
                style={[styles.buttonContainer, styles.loginButton]}>
                <Text style={styles.loginText}>Add To Cart</Text>
           </TouchableOpacity>
            </View>
            
            </View>



              <View style={{borderBottomColor: 'black',borderBottomWidth: 1,marginTop:10}}></View>
              <View style={{flexDirection:'row',height:150,width:'100%',marginTop:3,}}>

<View style={{height:145,width:'50%',marginTop:3,}} >

<View style={{height:15,width:35,borderColor:'green',marginLeft:10,marginTop:5,borderWidth:.3}}>
     <Text style={{fontSize:10,color:'green',marginLeft:2,}}> 4.5 <Icon name="star" size={10} style={{color:'green'}} /></Text>
</View>
<Text style={{fontSize:10,marginLeft:50,marginTop:-15,color:'gray'}}>35153 Ratings</Text>

<TouchableNativeFeedback>
<ImageBackground  source={require('../Component/Images/aata.jpg')} style={{ resizeMode: 'contain',width: '70%', height: '90%',marginTop:10,marginLeft:25}}>
</ImageBackground>
</TouchableNativeFeedback>

{/* <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',}}> Amul Butter:200 gms</Text> */}

</View>
<View style={{height:145,width:'50%',marginTop:3,}} >
    

<Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',}}> Aashirvad atta:5 kg</Text>

<Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:90,marginTop:10}}>$2.00 </Text>

<Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:40,marginTop:10}}>Save $0.5.00 </Text>

<TouchableOpacity
    style={[styles.buttonContainer, styles.loginButton]}>
    <Text style={styles.loginText}>Add To Cart</Text>
</TouchableOpacity>
</View>

</View>





              <View style={{borderBottomColor: 'black',borderBottomWidth: 1,marginTop:10}}></View>
              <View style={{flexDirection:'row',height:150,width:'100%',marginTop:3,}}>

            <View style={{height:145,width:'50%',marginTop:3,}} >

            <View style={{height:15,width:35,borderColor:'green',marginLeft:10,marginTop:5,borderWidth:.3}}>
              <Text style={{fontSize:10,color:'green',marginLeft:2,}}> 4.3 <Icon name="star" size={10} style={{color:'green'}} /></Text>
            </View>
            <Text style={{fontSize:10,marginLeft:50,marginTop:-15,color:'gray'}}>12128 Ratings</Text>

           <TouchableNativeFeedback>
            <ImageBackground  source={require('../Component/Images/dhara.jpg')} style={{ resizeMode: 'contain',width: '80%', height: '90%',marginTop:10,marginLeft:10}}>
            </ImageBackground>
           </TouchableNativeFeedback>
            {/* <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',}}> Amul Butter:200 gms</Text> */}
            
            </View>
            <View style={{height:145,width:'50%',marginTop:3,}} >
                
           
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',}}> Dhara Rice Oil:1 ltr</Text>
            
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:80,marginTop:10}}>$1.5.00 </Text>
            
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:45,marginTop:10}}>Save $0.5.00 </Text>
            
            <TouchableOpacity
                style={[styles.buttonContainer, styles.loginButton]}>
                <Text style={styles.loginText}>Add To Cart</Text>
           </TouchableOpacity>
            </View>
            
            </View>




 <View style={{borderBottomColor: 'black',borderBottomWidth: 1,marginTop:10}}></View>
<View style={{flexDirection:'row',height:150,width:'100%',marginTop:3,}}>

<View style={{height:145,width:'50%',marginTop:3,}} >

<View style={{height:15,width:35,borderColor:'green',marginLeft:10,marginTop:5,borderWidth:.3}}>
    <Text style={{fontSize:10,color:'green',marginLeft:2,}}> 4.2 <Icon name="star" size={10} style={{color:'green'}} /></Text>
</View>
<Text style={{fontSize:10,marginLeft:50,marginTop:-15,color:'gray'}}>14149 Ratings</Text>

<TouchableNativeFeedback>
<ImageBackground  source={require('../Component/Images/mdh.jpg')} style={{ resizeMode: 'contain',width: '80%', height: '90%',marginTop:25,marginLeft:8}}>
</ImageBackground>
</TouchableNativeFeedback>

{/* <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',}}> Amul Butter:200 gms</Text> */}

</View>
<View style={{height:145,width:'50%',marginTop:3,}} >
    

<Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',}}> Red Chilly:200 gm</Text>

<Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:90,marginTop:10}}>$1.00 </Text>

<Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:40,marginTop:10}}>Save $0.5.00 </Text>

<TouchableOpacity
    style={[styles.buttonContainer, styles.loginButton]}>
    <Text style={styles.loginText}>Add To Cart</Text>
</TouchableOpacity>
</View>
</View>

<View style={{borderBottomColor: 'black',borderBottomWidth: 1,marginTop:15}}></View>
              

 </ScrollView>


</View>

        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    buttonContainer: {
       height: 30,
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
       // marginBottom:30,
       width: 100,
     },
     loginButton: {
       justifyContent:'center',
       alignContent:'center',
       alignItems:'center',
       alignSelf:'center',
       backgroundColor: 'green',
       marginLeft: 30,
       marginTop: 20,
     //   marginBottom:30,
       borderRadius: 5,
       // opacity: 1,
     },
     loginText: {
       color: 'white',
       fontSize: 15,
    //    fontFamily:'fantasy',
       textAlign:'center',
    
     },
});