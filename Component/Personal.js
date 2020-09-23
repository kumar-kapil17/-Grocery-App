import React, { Component } from 'react'
import { Text, View, ScrollView,ImageBackground } from 'react-native'

export default class Personal extends Component {
   static navigationOptions = {
      headerShown: false
  }
    render() {
        return (
            <View style={{flex:1}}>

            <View><Text style={{fontSize:25,fontWeight:'bold',marginLeft:0,marginTop:10,textAlign:'center'}}>Personal Care</Text></View>

            <ScrollView
            showsVerticalScrollIndicator={false}>
                <View style={{flexDirection:'row',height:300,width:'100%',marginTop:3,}}>

                <View style={{height:280,width:'48%',marginLeft:5,marginTop:8,}}>

                <ImageBackground  source={require('../Component/Images/face.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '90%'}}>
                <View style={{height:40,width:40,borderColor:'red',borderWidth:2,borderRadius:100,backgroundColor:'red',margin:10}}>
                    <Text style={{margin:5,marginLeft:10,color:'white',fontSize:10}}>15% Off</Text>
                </View>
                   <Text style={{fontWeight:'bold',fontSize:18,letterSpacing:2,color:'black',textAlign:'center',marginTop:170}}> Face Cream</Text>
                   <Text style={{fontWeight:'bold',fontSize:18,letterSpacing:2,color:'black',textAlign:'center',marginTop:5}}> $15</Text>
                
                </ImageBackground>
                    
                </View>




                <View style={{height:280,width:'48%',marginTop:8,marginLeft:5,}}>

                <ImageBackground  source={require('../Component/Images/veet1.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '90%'}}>
                <View style={{height:40,width:40,borderColor:'red',borderWidth:2,borderRadius:100,backgroundColor:'red',margin:10}}>
                    <Text style={{margin:5,marginLeft:10,color:'white',fontSize:10}}>10% Off</Text>
                </View>
                   <Text style={{fontWeight:'bold',fontSize:18,letterSpacing:2,color:'black',textAlign:'center',marginTop:170}}> Veet</Text>
                   <Text style={{fontWeight:'bold',fontSize:18,letterSpacing:2,color:'black',textAlign:'center',marginTop:5}}> $5</Text>
                </ImageBackground>
                    
                </View>

                </View>







                <View style={{flexDirection:'row',height:300,width:'100%',marginTop:3,}}>

                <View style={{height:280,width:'48%',marginLeft:5,marginTop:8,}}>

                <ImageBackground  source={require('../Component/Images/trim.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '90%'}}>
                <View style={{height:40,width:40,borderColor:'red',borderWidth:2,borderRadius:100,backgroundColor:'red',margin:10}}>
                    <Text style={{margin:5,marginLeft:10,color:'white',fontSize:10}}>5% Off</Text>
                </View>
                   <Text style={{fontWeight:'bold',fontSize:18,letterSpacing:2,color:'black',textAlign:'center',marginTop:170}}> Man Trimmer</Text>
                   <Text style={{fontWeight:'bold',fontSize:18,letterSpacing:2,color:'black',textAlign:'center',marginTop:5}}> $7</Text>
                </ImageBackground>
                    
                </View>




                <View style={{height:280,width:'48%',marginTop:8,marginLeft:5,}}>


                <ImageBackground  source={require('../Component/Images/found.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '90%'}}>
                <View style={{height:40,width:40,borderColor:'red',borderWidth:2,borderRadius:100,backgroundColor:'red',margin:10}}>
                    <Text style={{margin:5,marginLeft:10,color:'white',fontSize:10}}>5% Off</Text>
                </View>
                   <Text style={{fontWeight:'bold',fontSize:18,letterSpacing:2,color:'black',textAlign:'center',marginTop:170}}> Foundation</Text>
                   <Text style={{fontWeight:'bold',fontSize:18,letterSpacing:2,color:'black',textAlign:'center',marginTop:5}}> $5</Text>
                </ImageBackground>
                    
                </View>

                </View>



                <View style={{flexDirection:'row',height:300,width:'100%',marginTop:3,}}>

                <View style={{height:280,width:'48%',marginLeft:5,marginTop:8,}}>

                <ImageBackground  source={require('../Component/Images/haircare.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '90%'}}>
                <View style={{height:40,width:40,borderColor:'red',borderWidth:2,borderRadius:100,backgroundColor:'red',margin:10}}>
                    <Text style={{margin:5,marginLeft:10,color:'white',fontSize:10}}>10% Off</Text>
                </View>
                   <Text style={{fontWeight:'bold',fontSize:18,letterSpacing:2,color:'black',textAlign:'center',marginTop:170}}>Hair Care</Text>
                   <Text style={{fontWeight:'bold',fontSize:18,letterSpacing:2,color:'black',textAlign:'center',marginTop:5}}> $10</Text>
                </ImageBackground>
                    
                </View>




                <View style={{height:280,width:'48%',marginTop:8,marginLeft:5,}}>

                <ImageBackground  source={require('../Component/Images/b.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '90%'}}>
                <View style={{height:40,width:40,borderColor:'red',borderWidth:2,borderRadius:100,backgroundColor:'red',margin:10}}>
                    <Text style={{margin:5,marginLeft:10,color:'white',fontSize:10}}>12% Off</Text>
                </View>
                   <Text style={{fontWeight:'bold',fontSize:18,letterSpacing:2,color:'black',textAlign:'center',marginTop:170}}> Beauty Cream</Text>
                   <Text style={{fontWeight:'bold',fontSize:18,letterSpacing:2,color:'black',textAlign:'center',marginTop:5}}> $10</Text>
                </ImageBackground>
                    
                </View>

                </View>
                </ScrollView>
            </View>
        )
    }
}
