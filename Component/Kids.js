import React, { Component } from 'react'
import { Text, View, ScrollView,
    ImageBackground,Image,
    TouchableOpacity,
    StyleSheet,
    
} from 'react-native'

export default class Kids extends Component {
  static navigationOptions = {
    headerShown: false
}
    render() {
        return (
    <View style={{flex:1,backgroundColor:'white'}}>
              
              
                <View>
                <Text style={{fontSize:25,fontWeight:'bold',marginLeft:0,marginTop:10,textAlign:'center'}}> Baby Care</Text>
                </View>

        <ScrollView
        showsVerticalScrollIndicator={false}>
           

              <View style={{borderBottomColor: 'black',borderBottomWidth: 1,marginTop:10}}></View>
             
             
             <View style={{flexDirection:'row',height:150,width:'100%',marginTop:3,}}>

            <View style={{height:145,width:'50%',marginTop:3,}} >

           <ImageBackground  source={require('../Component/Images/lotion.jpg')} style={{ resizeMode: 'contain',width: '80%', height: '100%',marginTop:5,marginLeft:15}}>
           <View style={{height:40,width:40,borderColor:'red',borderWidth:2,borderRadius:100,backgroundColor:'red',marginLeft:-5}}>
                  <Text style={{margin:5,marginLeft:10,color:'white',fontSize:10}}>10% Off</Text>
            </View>
           </ImageBackground>

            {/* <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',}}> Amul Butter:200 gms</Text> */}
            
            </View>
            <View style={{height:145,width:'50%',marginTop:3,}} >
                
           
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'left',marginLeft:5}}>Johnson's Baby Lotion</Text>
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:90,marginTop:0}}>500ml </Text>
            
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:80,marginTop:2}}>$2.5.00 </Text>
            
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:40,marginTop:5}}>Save $0.5.00 </Text>
            
            <TouchableOpacity
                style={[styles.buttonContainer, styles.loginButton]}>
                <Text style={styles.loginText}>Add To Cart</Text>
           </TouchableOpacity>
            </View>

            </View>

            

           

              <View style={{flexDirection:'row',borderBottomColor: 'black',borderBottomWidth: 1,}}></View>
              <View style={{flexDirection:'row',height:150,width:'100%',marginTop:3,}}>

            <View style={{height:145,width:'50%',marginTop:3,}} >

           <ImageBackground  source={require('../Component/Images/shampoo.jpg')} style={{ resizeMode: 'contain',width: '85%', height: '100%',marginTop:5,marginLeft:5}}>
           <View style={{height:40,width:40,borderColor:'red',borderWidth:2,borderRadius:100,backgroundColor:'red',marginLeft:5}}>
                  <Text style={{margin:5,marginLeft:10,color:'white',fontSize:10}}>12% Off</Text>
            </View>
           </ImageBackground>

            {/* <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',}}> Amul Butter:200 gms</Text> */}
            
            </View>
            <View style={{height:145,width:'50%',marginTop:3,}} >
                
           
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'left',marginLeft:20}}> Johnson's shampoo</Text>
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:90,marginTop:0}}>500ml </Text>
            
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:80,marginTop:5}}>$1.5.00 </Text>
            
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:40,marginTop:5}}>Save $0.5.00 </Text>
            
            <TouchableOpacity
                style={[styles.buttonContainer, styles.loginButton]}>
                <Text style={styles.loginText}>Add To Cart</Text>
           </TouchableOpacity>
            </View>
            
            </View>



              <View style={{borderBottomColor: 'black',borderBottomWidth: 1,marginTop:10}}></View>
              <View style={{flexDirection:'row',height:150,width:'100%',marginTop:3,}}>

<View style={{height:145,width:'50%',marginTop:3,}} >

<ImageBackground  source={require('../Component/Images/powder.jpg')} style={{ resizeMode: 'contain',width: '80%', height: '100%',marginTop:5,marginLeft:5}}>
<View style={{height:40,width:40,borderColor:'red',borderWidth:2,borderRadius:100,backgroundColor:'red',marginLeft:5}}>
                  <Text style={{margin:5,marginLeft:10,color:'white',fontSize:10}}>14% Off</Text>
            </View>
</ImageBackground>

{/* <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',}}> Amul Butter:200 gms</Text> */}

</View>
<View style={{height:145,width:'50%',marginTop:3,}} >
    

<Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'left',}}> Johnson's Baby Powder </Text>
<Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:80,marginTop:0}}>400gm </Text>
            
<Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:80,marginTop:5}}>$1.5.00 </Text>

<Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:40,marginTop:5}}>Save $0.5.00 </Text>

<TouchableOpacity
    style={[styles.buttonContainer, styles.loginButton]}>
    <Text style={styles.loginText}>Add To Cart</Text>
</TouchableOpacity>
</View>

</View>





              <View style={{borderBottomColor: 'black',borderBottomWidth: 1,marginTop:10}}></View>
              <View style={{flexDirection:'row',height:150,width:'100%',marginTop:3,}}>

            <View style={{height:145,width:'50%',marginTop:3,}} >

           <ImageBackground  source={require('../Component/Images/babyoil.jpg')} style={{ resizeMode: 'contain',width: '90%', height: '100%',marginTop:5,marginLeft:5}}>
           <View style={{height:40,width:40,borderColor:'red',borderWidth:2,borderRadius:100,backgroundColor:'red',marginLeft:5}}>
                  <Text style={{margin:5,marginLeft:10,color:'white',fontSize:10}}>15% Off</Text>
            </View>
           </ImageBackground>

            {/* <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',}}> Amul Butter:200 gms</Text> */}
            
            </View>
            <View style={{height:145,width:'50%',marginTop:3,}} >
                
           
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',}}> Johnson's Baby Oil</Text>
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:80,marginTop:0}}>200 ml </Text>
            
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:90,marginTop:5}}>$1.00 </Text>
            
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:40,marginTop:5}}>Save $0.5.00 </Text>
            
            <TouchableOpacity
                style={[styles.buttonContainer, styles.loginButton]}>
                <Text style={styles.loginText}>Add To Cart</Text>
           </TouchableOpacity>
            </View>
            
            </View>




<View style={{borderBottomColor: 'black',borderBottomWidth: 1,marginTop:10}}></View>

<View style={{flexDirection:'row',height:150,width:'100%',marginTop:3,}}>

<View style={{height:145,width:'50%',marginTop:3,}} >

<ImageBackground  source={require('../Component/Images/pamp.jpg')} style={{ resizeMode: 'contain',width: '90%', height: '80%',marginTop:25,marginLeft:5}}>
<View style={{height:40,width:40,borderColor:'red',borderWidth:2,borderRadius:100,backgroundColor:'red',marginLeft:5,marginTop:-20}}>
                  <Text style={{margin:5,marginLeft:10,color:'white',fontSize:10}}>10% Off</Text>
            </View>
</ImageBackground>

{/* <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',}}> Amul Butter:200 gms</Text> */}

</View>
<View style={{height:145,width:'50%',marginTop:3,}} >
    

<Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'left',}}> Pampers Baby  Pants </Text>

<Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:80,marginTop:5}}>$5.00 </Text>

<Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:40,marginTop:10}}>Save $1.00 </Text>

<TouchableOpacity
    style={[styles.buttonContainer, styles.loginButton]}>
    <Text style={styles.loginText}>Add To Cart</Text>
</TouchableOpacity>
</View>

</View>



<View style={{borderBottomColor: 'black',borderBottomWidth: 1,marginTop:10}}></View>

<View style={{flexDirection:'row',height:150,width:'100%',marginTop:3,}}>

<View style={{height:145,width:'50%',marginTop:3,}} >

<ImageBackground  source={require('../Component/Images/towel.jpg')} style={{ resizeMode: 'contain',width: '90%', height: '99%',marginTop:5,marginLeft:5}}>
<View style={{height:40,width:40,borderColor:'red',borderWidth:2,borderRadius:100,backgroundColor:'red',marginLeft:5}}>
                  <Text style={{margin:5,marginLeft:10,color:'white',fontSize:10}}>8% Off</Text>
            </View>
</ImageBackground>

{/* <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',}}> Amul Butter:200 gms</Text> */}

</View>
<View style={{height:145,width:'50%',marginTop:3,}} >
    

<Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:10}}> New Born Baby</Text>

<Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:80,marginTop:10}}>$2.00 </Text>

<Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:40,marginTop:10}}>Save $0.5.00 </Text>

<TouchableOpacity
    style={[styles.buttonContainer, styles.loginButton]}>
    <Text style={styles.loginText}>Add To Cart</Text>
</TouchableOpacity>
</View>

</View>
              

             



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
       marginTop: 15,
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