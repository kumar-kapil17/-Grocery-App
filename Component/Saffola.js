import React, { Component } from 'react';
import { View, Text,ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'


export default class Saffola extends Component {

    // navigationOptions= () => ({
    //     headerShown: false,
    //   })
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
          <ScrollView
          showsVerticalScrollIndicator={false}>
         
          <View style={{height:25,width:70,borderColor:'green',borderWidth:1,marginLeft:20,marginTop:10,backgroundColor:'#45CE30',opacity:.1}}>
             </View>
             <Text style={{fontSize:15,textAlign:'center',marginTop:-23,color:'gray',marginLeft:-250}}>Saffola</Text>
          
          <Text style={{fontSize:15,marginLeft:15,marginTop:10}}> Saffola Gold Oil, 5L - Can</Text>
          <Text style={{fontSize:15,marginLeft:15,marginTop:5}}> $10.00     save $2.00</Text>
          <Text style={{fontSize:8,marginLeft:18,marginTop:4}}> (Inclusive of all taxes)</Text>

          <View style={{flexDirection:'row',height:60,width:'100%'}}>
              <View style={{height:15,width:35,borderColor:'green',marginLeft:18,marginTop:10,borderWidth:.3}}>
              <Text style={{fontSize:10,color:'green',marginLeft:2,}}> 4.1 <Icon name="star" size={10} style={{color:'green'}} /></Text>
              </View>

              <View style={{height:20,width:180,marginLeft:5,marginTop:10,}}>
              <Text style={{fontSize:10,marginLeft:3,marginTop:0,color:'gray'}}>13546 Ratings & 31 Reviews </Text>
              </View>

          </View>

          <View style={{height:330,width:'100%',}}>
            <ImageBackground  source={require('../Component/Images/safola.png')} style={{ resizeMode: 'contain',width: '100%', height: '100%',marginTop:0}}>
             </ImageBackground>

          </View>

          <View style={{borderBottomColor: 'gray',borderBottomWidth: 3,marginTop:5}}></View>

          <View style={{height:50,width:'100%',marginTop:3,}}>
              <Text style={{fontSize:18,padding:10,color:'gray'}}>About This Product</Text>

          </View>
          <View style={{borderBottomColor: 'gray',borderBottomWidth: .3,}}></View>

          <View style={{height:350,width:'100%',}}>
             <Text style={{fontSize:15,marginLeft:8,marginTop:5,color:'gray'}}>About The Product</Text>
             <Text style={{fontSize:13,marginLeft:18,marginTop:5,}}>It’s not always about reducing the amount of oil in your food, it’s about choosing the right oil for a healthier lifestyle. This Saffola oil will take care of you and your family by providing the benefits of natural antioxidants, MUFA, PUFA, and Vitamins A and D.</Text>

             <View style={{borderBottomColor: 'gray',borderBottomWidth: .3,}}></View>

             <Text style={{fontSize:15,marginLeft:8,marginTop:5,color:'gray'}}>Healthy Edible Oil</Text>
             <Text style={{fontSize:13,marginLeft:18,marginTop:5,}}>This oil is a blend of 80% refined rice-bran-oil and 20% refined safflower-oil. Also, it has fatty acids that help you by giving a balance of MUFA and PUFA.</Text>
             
             <View style={{borderBottomColor: 'gray',borderBottomWidth: .3,}}></View>

             <Text style={{fontSize:15,marginLeft:8,marginTop:5,color:'gray'}}>Losorb Technology</Text>
             <Text style={{fontSize:13,marginLeft:18,marginTop:5,}}>It ensures up to 20% lower absorption of oil in your food. It also contains the power of natural antioxidants to keep your heart healthy by reducing free radicals.</Text>
           
             <View style={{borderBottomColor: 'gray',borderBottomWidth: .3,}}></View>

             <Text style={{fontSize:15,marginLeft:8,marginTop:5,color:'gray'}}>How To Use</Text>
             <Text style={{fontSize:13,marginLeft:18,marginTop:5,}}>It can be used in cooking, frying,stir-frying,salad oil,baking,seasoning.</Text>
           

          </View>

          <View style={{borderBottomColor: 'gray',borderBottomWidth: 3,marginTop:5}}></View>

          <View style={{height:50,width:'100%',marginTop:3,}}>
              <Text style={{fontSize:18,padding:10,color:'gray'}}>Ratings & Reviews</Text>

          </View>
          <View style={{borderBottomColor: 'gray',borderBottomWidth: .3,}}></View>

          <View style={{height:80,width:'100%',}}>
          <Text style={{fontSize:25,color:'green',margin:5,fontWeight:'bold'}}> 4.1 <Icon name="star" size={20} style={{color:'green'}} /></Text>
          <Text style={{fontSize:15,marginLeft:10,marginTop:0,color:'gray'}}>13546 Ratings & 31 Reviews </Text>
              
          </View>
          <View style={{width:'90%',borderBottomColor: 'gray',borderBottomWidth: .3,marginLeft:15}}></View>

          <View style={{height:100,width:'100%',}}>
          <View style={{height:15,width:25,borderColor:'green',marginLeft:18,marginTop:10,borderWidth:.3}}>
              <Text style={{fontSize:10,color:'green',marginLeft:2,}}> 5 <Icon name="star" size={10} style={{color:'green'}} /></Text>
              </View>
              <Text style={{fontSize:10,marginTop:10,marginLeft:15}}>Good Product</Text>
              <Text style={{fontSize:10,marginTop:10,marginLeft:15,color:'gray'}}>SUJATA,Mumbai(1 months ago)</Text>

          </View>

          <View style={{borderBottomColor: 'gray',borderBottomWidth: .3,}}></View>

          <View style={{height:100,width:'100%',}}>
          <View style={{height:15,width:35,borderColor:'green',marginLeft:18,marginTop:10,borderWidth:.3}}>
              <Text style={{fontSize:10,color:'green',marginLeft:2,}}> 4.4 <Icon name="star" size={10} style={{color:'green'}} /></Text>
              </View>
              <Text style={{fontSize:10,marginTop:10,marginLeft:15}}>Good </Text>
              <Text style={{fontSize:10,marginTop:10,marginLeft:15,color:'gray'}}>RAMESH,New Delhi(2 weeks ago)</Text>

          </View>

          <View style={{borderBottomColor: 'gray',borderBottomWidth: .3,}}></View>

          <View style={{height:100,width:'100%',backgroundColor:'#DAE0E2',marginTop:2}}>

              <Text style={{fontSize:13,textAlign:'center',marginTop:45,color:'gray'}}>That's all folks!</Text>

          </View>


          </ScrollView>
      </View>
    );
  }
}
