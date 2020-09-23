import React, { Component } from 'react';
import { View, Text,ScrollView,Alert,TouchableHighlight, TextInput,ImageBackground, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import CarouselMan from './CarouselMan';



export default class Home extends Component {

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
      <View style={{flex:1}}>
        

      <View style={{height:120,width:'100%',backgroundColor:'white',}}>

     <View style={{height:40,width:40,marginLeft:300,marginTop:15}}>

     <TouchableOpacity
      onPress = {() => Alert.alert('Alert You can add items') }>
         <Icon name={'cart'} size={35} style={{color:'black',marginTop:0,marginLeft:0}} />
      {/* <ImageBackground  source={require('../Component/Images/ca.jpg')} style={{ resizeMode: 'contain',width: 30, height:30,}}>
     </ImageBackground> */}
     </TouchableOpacity>

     </View>


    {/* <View style={{height:30,width:50,marginTop:-20,marginLeft:10}}>
     <Image  source={require('../Component/Images/location.png')} style={{ resizeMode: 'contain',width: 20, height:20,backgroundColor:'white'}}>
     </Image>
     </View> */}



    
        <Text style={{textAlign:'left',fontSize:15,fontWeight:'bold',marginTop:-40,marginLeft:45,}}>Your Location </Text>
        <Text style={{textAlign:'left',fontSize:10,fontWeight:'bold',marginTop:3,marginLeft:48,}}>201309, Noida </Text>
       

        <View style={{height:40,width:'95%',paddingLeft:15,backgroundColor:'white',marginLeft:10,marginTop:10,borderRadius:5,borderColor:'gray',borderWidth:1}}>
      <TextInput
              
              keyboardType={'name-phone-pad'}
              textStyle={{color: 'white'}}
              placeholder="Search 18000+ Product"
              underlineColorAndroid="transparent">
      </TextInput>
      <ImageBackground  source={require('../Component/Images/search.png')} style={{ resizeMode: 'contain',width: 15, height:15,marginLeft:290,marginTop:-25,}}>
     </ImageBackground>

      </View>


      </View>

      {/* <View style={{height:50,width:'95%',paddingLeft:15,backgroundColor:'white',marginLeft:10,borderRadius:5,borderColor:'red',borderWidth:2}}>
      <TextInput
              
              keyboardType={'name-phone-pad'}
              textStyle={{color: 'white'}}
              placeholder="Search 18000+ Product"
              underlineColorAndroid="transparent">
      </TextInput>
      <ImageBackground  source={require('../Component/Images/search.png')} style={{ resizeMode: 'contain',width: 15, height:15,marginLeft:290,marginTop:-30,}}>
     </ImageBackground>

      </View> */}

      <ScrollView
       vertical={true}
       showsVerticalScrollIndicator={false}
      >  
    {/* <View style={{height:40,width:'100%',}}>
    <Text style={{textAlign:'left',fontSize:15,fontWeight:'bold',marginTop:8}}> Be Healthy & Safe </Text>
    </View> */}


{/* <View  style={{height:147,width:'50%',marginLeft:2}}>

<ImageBackground  source={require('../Component/Images/i2.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
   <Text style={{fontWeight:'bold',fontSize:24,letterSpacing:2,color:'white',textAlign:'center',marginTop:40}}> </Text>
</ImageBackground>
 
</View> */}



    {/* <View style={{flexDirection:'row',height:150,width:'100%',marginTop:3,}}>

    <ImageBackground  source={require('../Component/Images/i2.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
   <Text style={{fontWeight:'bold',fontSize:24,letterSpacing:2,color:'white',textAlign:'center',marginTop:40}}> </Text>
</ImageBackground>

    </View> */}

<View style={{height:180,width:'100%',}}>

<CarouselMan/>
</View>

      <View style={{height:40,width:'100%',backgroundColor:'#e5f4fb'}}>
        <Text style={{textAlign:'left',fontSize:15,fontWeight:'bold',marginTop:8,marginLeft:10}}>Monthly Essentials </Text>
      </View>

<View style={{flexDirection:'row',height:150,width:'100%',}}>

    <TouchableNativeFeedback style={{height:150,width:'100%'}}
    //  onPress = {() => Alert.alert('Alert Title') }
    onPress={() => this.props.navigation.navigate('Month')}
     >
      <ImageBackground  source={require('../Component/Images/monthly.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
      {/* <Text style={{fontWeight:'bold',fontSize:24,letterSpacing:2,color:'white',textAlign:'center',marginTop:40}}> </Text> */}
    </ImageBackground>
    </TouchableNativeFeedback>

    
</View>

<View style={{height:40,width:'100%',backgroundColor:'#e5f4fb'}}>
<Text style={{textAlign:'left',fontSize:15,fontWeight:'bold',marginTop:13,marginLeft:10}}>Shop By Category </Text>
</View>



<View style={{height:475,width:'100%',marginTop:0,}}>


      <View style={{flexDirection:'row',height:150,width:'100%',marginTop:0,}}>

      <View style={{height:145,width:'50%',marginTop:3,}} >

      <TouchableNativeFeedback
    
      onPress={() => this.props.navigation.navigate('Dairy')}>
        
      <ImageBackground  source={require('../Component/Images/dair2.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '90%'}}>
      <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:2,color:'grey',textAlign:'center',marginTop:125}}>Dairy </Text>
      </ImageBackground>
     
      </TouchableNativeFeedback>
      </View>

      <View style={{height:145,width:'50%',marginTop:3,}}>
      <TouchableNativeFeedback
        onPress={() => this.props.navigation.navigate('Foods')}>
      <ImageBackground  source={require('../Component/Images/pf.jpg')} style={{ resizeMode: 'contain',width: '99%', height: '90%'}}>
      <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:2,color:'grey',textAlign:'center',marginTop:125,}}>Packaged Food </Text>
      </ImageBackground>
      </TouchableNativeFeedback>
      </View>

      </View>



      <View style={{flexDirection:'row',height:150,width:'100%',marginTop:3,}}>

      <View style={{height:145,width:'50%',marginTop:3,}} >
        <TouchableNativeFeedback
        onPress={() => this.props.navigation.navigate('Fruits')}>
      <ImageBackground  source={require('../Component/Images/fruit.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '90%'}}>
      <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:2,color:'grey',textAlign:'center',marginTop:125}}>fruits </Text>
      </ImageBackground>
      </TouchableNativeFeedback>
      </View>

      <View style={{height:145,width:'50%',marginTop:3,marginLeft:2,}}>
        <TouchableNativeFeedback
        onPress={() => this.props.navigation.navigate('Vegetables')}>
      <ImageBackground  source={require('../Component/Images/veg.jpg')} style={{ resizeMode: 'contain',width: '99%', height: '90%'}}>
      <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:2,color:'grey',textAlign:'center',marginTop:125}}>Vegetables </Text>
      </ImageBackground>
      </TouchableNativeFeedback>
      </View>

        </View>



      <View style={{flexDirection:'row',height:150,width:'100%',marginTop:3,}}>

      <View style={{height:145,width:'50%',marginTop:3,}} >
        <TouchableNativeFeedback
        onPress={() => this.props.navigation.navigate('Personal')}>
      <ImageBackground  source={require('../Component/Images/personal.png')} style={{ resizeMode: 'contain',width: '100%', height: '90%'}}>
      <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:2,color:'grey',textAlign:'center',marginTop:128}}>Personal Care </Text>
      </ImageBackground>
      </TouchableNativeFeedback>
      </View>

      <View style={{height:145,width:'50%',marginTop:3,}}>
        <TouchableNativeFeedback 
        onPress={() => this.props.navigation.navigate('Kids')}>
      <ImageBackground  source={require('../Component/Images/kid.jpg')} style={{ resizeMode: 'contain',width: '99%', height: '90%'}}>
      <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:2,color:'grey',textAlign:'center',marginTop:128}}>Baby Care </Text>
      </ImageBackground>
      </TouchableNativeFeedback>
      </View>

     </View>




</View>


<View style={{borderBottomColor: 'gray',borderBottomWidth: 1,marginTop:5}}></View>






    <View style={{height:40,width:'100%',marginTop:0,backgroundColor:'#e5f4fb'}}>
    <Text style={{textAlign:'left',fontSize:15,fontWeight:'bold',marginTop:8,marginLeft:10,}}>Beverages </Text>
    </View>

   <TouchableOpacity style={{height:150,width:'100%',}}
   onPress={() => this.props.navigation.navigate('Foods')}>

   <ImageBackground  source={require('../Component/Images/chai.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
      <Text style={{fontWeight:'bold',fontSize:24,letterSpacing:2,color:'white',textAlign:'center',marginTop:40}}> </Text>
    </ImageBackground>

    </TouchableOpacity>


    <View style={{height:40,width:'100%',backgroundColor:'#e5f4fb'}}>
    <Text style={{textAlign:'left',fontSize:15,fontWeight:'bold',marginTop:8,marginLeft:10}}>Dry Fruits </Text>
    </View>
    <View style={{flexDirection:'row',height:110,width:'100%',}}>

   <ImageBackground  source={require('../Component/Images/pic.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '100%',marginTop:0}}>
      {/* <Text style={{fontWeight:'bold',fontSize:24,letterSpacing:2,color:'white',textAlign:'center',marginTop:40}}> </Text> */}
    </ImageBackground>

    </View>




      <View style={{height:40,width:'100%',backgroundColor:'#e5f4fb'}}>
        <Text style={{textAlign:'left',fontSize:15,fontWeight:'bold',marginTop:8,marginLeft:10}}>Brand Store </Text>
      </View>



      <View style={{height:220,width:'100%',}}>
    
    <View style={{height:100,width:'100%'}}>
    <View style={{flexDirection:'row',height:100,width:'100%',}}>

    <ImageBackground  source={require('../Component/Images/home.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
      <Text style={{fontWeight:'bold',fontSize:24,letterSpacing:2,color:'white',textAlign:'center',marginTop:40}}> </Text>
    </ImageBackground>
    </View>
    
    </View>

    <View style={{height:100,width:'100%',marginTop:0}}>
    <View style={{flexDirection:'row',height:100,width:'100%',marginTop:9}}>

    <ImageBackground  source={require('../Component/Images/hair.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
      <Text style={{fontWeight:'bold',fontSize:24,letterSpacing:2,color:'white',textAlign:'center',marginTop:40}}> </Text>
    </ImageBackground>

    </View>
    </View>

    </View>

<View style={{height:40,width:'100%',backgroundColor:'#e5f4fb'}}>
<Text style={{textAlign:'left',fontSize:15,fontWeight:'bold',marginTop:8,marginLeft:10}}>Appliances </Text>
</View>

   <View style={{flexDirection:'row',height:150,width:'100%',marginTop:3,}}>

    <ImageBackground  source={require('../Component/Images/appli.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>

    </ImageBackground>

    </View>




{/* <View style={{height:40,width:'100%',}}>
<Text style={{textAlign:'left',fontSize:15,fontWeight:'bold',marginTop:13,}}>  Shop By Category </Text>
</View>



<View style={{height:475,width:'100%',marginTop:3,}}>


      <View style={{flexDirection:'row',height:150,width:'100%',marginTop:3,}}>

      <View style={{height:145,width:'50%',marginTop:3,}} >

      <TouchableNativeFeedback
    
      onPress={() => this.props.navigation.navigate('Dairy')}>
        
      <ImageBackground  source={require('../Component/Images/dair2.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '90%'}}>
      <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:2,color:'grey',textAlign:'center',marginTop:125}}>Dairy </Text>
      </ImageBackground>
     
      </TouchableNativeFeedback>
      </View>

      <View style={{height:145,width:'50%',marginTop:3,}}>
      <TouchableNativeFeedback
        onPress={() => this.props.navigation.navigate('Foods')}>
      <ImageBackground  source={require('../Component/Images/pf.jpg')} style={{ resizeMode: 'contain',width: '99%', height: '90%'}}>
      <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:2,color:'grey',textAlign:'center',marginTop:125}}>Packaged Food </Text>
      </ImageBackground>
      </TouchableNativeFeedback>
      </View>

      </View>



      <View style={{flexDirection:'row',height:150,width:'100%',marginTop:3,}}>

      <View style={{height:145,width:'50%',marginTop:3,}} >
        <TouchableNativeFeedback
        onPress={() => this.props.navigation.navigate('Fruits')}>
      <ImageBackground  source={require('../Component/Images/fruit.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '90%'}}>
      <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:2,color:'grey',textAlign:'center',marginTop:125}}>fruits </Text>
      </ImageBackground>
      </TouchableNativeFeedback>
      </View>

      <View style={{height:145,width:'50%',marginTop:3,marginLeft:2,}}>
        <TouchableNativeFeedback
        onPress={() => this.props.navigation.navigate('Vegetables')}>
      <ImageBackground  source={require('../Component/Images/veg.jpg')} style={{ resizeMode: 'contain',width: '99%', height: '90%'}}>
      <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:2,color:'grey',textAlign:'center',marginTop:125}}>Vegetables </Text>
      </ImageBackground>
      </TouchableNativeFeedback>
      </View>

        </View>



      <View style={{flexDirection:'row',height:150,width:'100%',marginTop:3,}}>

      <View style={{height:145,width:'50%',marginTop:3,}} >
        <TouchableNativeFeedback
        onPress={() => this.props.navigation.navigate('Personal')}>
      <ImageBackground  source={require('../Component/Images/personal.png')} style={{ resizeMode: 'contain',width: '100%', height: '90%'}}>
      <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:2,color:'grey',textAlign:'center',marginTop:128}}>Personal Care </Text>
      </ImageBackground>
      </TouchableNativeFeedback>
      </View>

      <View style={{height:145,width:'50%',marginTop:3,}}>
        <TouchableNativeFeedback 
        onPress={() => this.props.navigation.navigate('Kids')}>
      <ImageBackground  source={require('../Component/Images/kid.jpg')} style={{ resizeMode: 'contain',width: '99%', height: '90%'}}>
      <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:2,color:'grey',textAlign:'center',marginTop:128}}>Baby Care </Text>
      </ImageBackground>
      </TouchableNativeFeedback>
      </View>

     </View>




</View> */}


<View style={{height:40,width:'100%',backgroundColor:'#e5f4fb'}}>
<Text style={{textAlign:'left',fontSize:15,fontWeight:'bold',marginTop:8,marginLeft:10}}>Organic Store </Text>
</View>

  <TouchableHighlight style={{height:150,width:'100%',}}
  onPress={() => this.props.navigation.navigate('Vegetables')}>


    <ImageBackground  source={require('../Component/Images/org.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>

    </ImageBackground>

  </TouchableHighlight>





<View style={{borderBottomColor: 'gray',borderBottomWidth: 1,marginTop:2}}></View>

     


</ScrollView>
</View>

    );
  }
}
