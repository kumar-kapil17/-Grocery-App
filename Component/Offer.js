import React, { Component } from 'react'
import { Text, View,ImageBackground, ScrollView ,TouchableOpacity,StyleSheet} from 'react-native'

export default class Offer extends Component {
    static navigationOptions = {
        headerShown: false
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <ScrollView 
                showsVerticalScrollIndicator={false}>
                <View style={{flexDirection:'row',height:150,width:'100%',}}>

                    <ImageBackground  source={require('../Component/Images/gro.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '90%',}}>
            
                    </ImageBackground>

                </View>
                
                <Text style={{fontWeight:'bold',fontSize:20,color:'grey'}}> Offers For You </Text>

 <View style={{flexDirection:'row',height:150,width:'100%',marginTop:3,}}>

              
            <View style={{height:145,width:'50%',marginTop:0,}} >
               
                
           
                <ImageBackground  source={require('../Component/Images/vim.jpg')} style={{ resizeMode: 'contain',width: '90%', height: '99%',marginTop:0,marginLeft:8}}>
                <View style={{height:40,width:40,borderColor:'red',borderWidth:2,borderRadius:100,backgroundColor:'red'}}>
                    <Text style={{margin:5,marginLeft:10,color:'white',fontSize:10}}>10% Off</Text>
                </View>
                </ImageBackground>

            </View>

                <View style={{height:145,width:'50%',marginTop:3,}} >

                <Text style={{fontSize:15,letterSpacing:0,textAlign:'center',color:'grey',marginLeft:5}}> Dishwash Gel,Lemon </Text>

                <Text style={{fontSize:15,letterSpacing:0,textAlign:'center',marginLeft:30,marginTop:10,color:'grey'}}>Buy Two Get One </Text>

                <Text style={{fontSize:15,letterSpacing:0,textAlign:'center',marginLeft:40,marginTop:10,color:'grey'}}>$6 </Text>

                <TouchableOpacity
                    style={[styles.buttonContainer, styles.loginButton]}>
                    <Text style={styles.loginText}>Add To Cart</Text>
                </TouchableOpacity>
                </View>

 </View>

 <View style={{borderBottomColor: 'grey',borderBottomWidth: 1,marginTop:10}}></View>

 <View style={{flexDirection:'row',height:150,width:'100%',marginTop:3,}}>

            <View style={{height:145,width:'50%',marginTop:3,}} >

            <ImageBackground  source={require('../Component/Images/lyzol.jpg')} style={{ resizeMode: 'contain',width: '90%', height: '99%',marginTop:5,marginLeft:8}}>
                <View style={{marginTop:-4,height:40,width:40,borderColor:'red',borderWidth:2,borderRadius:100,backgroundColor:'red'}}>
                    <Text style={{margin:5,marginLeft:10,color:'white',fontSize:10}}>10% Off</Text>
                </View>
          
            </ImageBackground>

            </View>

            <View style={{height:145,width:'50%',marginTop:3,}} >
                

            <Text style={{fontSize:15,letterSpacing:0,textAlign:'center',color:'grey',marginLeft:5}}> Floor Cleaner-Citrus </Text>

            <Text style={{fontSize:15,letterSpacing:0,textAlign:'center',marginLeft:30,marginTop:10,color:'grey'}}>Buy Two Get One </Text>

            <Text style={{fontSize:15,letterSpacing:0,textAlign:'center',marginLeft:40,marginTop:10,color:'grey'}}>$5 </Text>

            <TouchableOpacity
                style={[styles.buttonContainer, styles.loginButton]}>
                <Text style={styles.loginText}>Add To Cart</Text>
            </TouchableOpacity>
            </View>

</View>

<View style={{borderBottomColor: 'grey',borderBottomWidth: 1,marginTop:10}}></View>


<View style={{flexDirection:'row',height:160,width:'100%',marginTop:3,}}>

            <View style={{height:145,width:'50%',marginTop:3,}} >

            <ImageBackground  source={require('../Component/Images/harpic.jpg')} style={{ resizeMode: 'contain',width: '90%', height: '99%',marginTop:5,marginLeft:8}}>
            <View style={{height:40,width:40,borderColor:'red',borderWidth:2,borderRadius:100,backgroundColor:'red'}}>
                    <Text style={{margin:5,marginLeft:10,color:'white',fontSize:10}}>12% Off</Text>
                </View>
            </ImageBackground>

            </View>

            <View style={{height:145,width:'50%',marginTop:3,}} >
                

            <Text style={{fontSize:15,letterSpacing:0,textAlign:'center',color:'grey',marginLeft:5}}> Harpic Toilet Cleaner </Text>

            <Text style={{fontSize:15,letterSpacing:0,textAlign:'center',marginLeft:30,marginTop:10,color:'grey'}}>Buy Two Get One </Text>

            <Text style={{fontSize:15,letterSpacing:0,textAlign:'center',marginLeft:40,marginTop:10,color:'grey'}}>$5 </Text>

            <TouchableOpacity
                style={[styles.buttonContainer, styles.loginButton]}>
                <Text style={styles.loginText}>Add To Cart</Text>
            </TouchableOpacity>
            </View>

</View>
<View style={{borderBottomColor: 'grey',borderBottomWidth: 1,marginTop:10}}></View>
<View style={{flexDirection:'row',height:160,width:'100%',marginTop:3,}}>

            <View style={{height:145,width:'50%',marginTop:3,}} >

            <ImageBackground  source={require('../Component/Images/colin.jpg')} style={{ resizeMode: 'contain',width: '90%', height: '99%',marginTop:5,marginLeft:8}}>
            <View style={{height:40,width:40,borderColor:'red',borderWidth:2,borderRadius:100,backgroundColor:'red'}}>
                    <Text style={{margin:5,marginLeft:10,color:'white',fontSize:10}}>15% Off</Text>
                </View>
            </ImageBackground>

            </View>

            <View style={{height:145,width:'50%',marginTop:3,}} >
                

            <Text style={{fontSize:15,letterSpacing:0,textAlign:'center',color:'grey',marginLeft:5}}> Colin Glass Cleaner </Text>

            <Text style={{fontSize:15,letterSpacing:0,textAlign:'center',marginLeft:30,marginTop:10,color:'grey'}}>Buy Two Get One </Text>

            <Text style={{fontSize:15,letterSpacing:0,textAlign:'center',marginLeft:40,marginTop:10,color:'grey'}}>$5 </Text>

            <TouchableOpacity
                style={[styles.buttonContainer, styles.loginButton]}>
                <Text style={styles.loginText}>Add To Cart</Text>
            </TouchableOpacity>
            </View>

</View>

<View style={{borderBottomColor: 'grey',borderBottomWidth: 1,marginTop:10}}></View>


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
       backgroundColor: 'grey',
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
