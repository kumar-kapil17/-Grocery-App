import React, { Component } from 'react'
import { Text, View, ScrollView,
    ImageBackground,Image,
    TouchableOpacity,
    StyleSheet,
    
} from 'react-native'

export default class Fruits extends Component {
  static navigationOptions = {
    headerShown: false
}
    render() {
        return (
    <View style={{flex:1,backgroundColor:'white'}}>
              
              
                <View>
                <Text style={{fontSize:25,fontWeight:'bold',marginLeft:0,marginTop:10,textAlign:'center'}}> Fruits</Text>
                </View>

        <ScrollView 
          showsVerticalScrollIndicator={false}>
           

              <View style={{borderBottomColor: 'black',borderBottomWidth: 1,marginTop:10}}></View>
             
             
             <View style={{flexDirection:'row',height:150,width:'100%',marginTop:3,}}>

            <View style={{height:145,width:'50%',marginTop:3,}} >

           <ImageBackground  source={require('../Component/Images/apple.jpg')} style={{ resizeMode: 'contain',width: '90%', height: '90%',marginTop:5,marginLeft:5}}>
           <View style={{height:40,width:40,borderColor:'red',borderWidth:2,borderRadius:100,backgroundColor:'red',marginLeft:5}}>
                    <Text style={{margin:5,marginLeft:10,color:'white',fontSize:10}}>10% Off</Text>
                </View>
           </ImageBackground>

            {/* <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',}}> Amul Butter:200 gms</Text> */}
            
            </View>
            <View style={{height:145,width:'50%',marginTop:3,}} >
                
           
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:5}}>Fresh Apple 1 kg</Text>
            
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:80,marginTop:10}}>$2.00 </Text>
            
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:40,marginTop:10}}>Save $0.8.00 </Text>
            
            <TouchableOpacity
                style={[styles.buttonContainer, styles.loginButton]}>
                <Text style={styles.loginText}>Add To Cart</Text>
           </TouchableOpacity>
            </View>

            </View>

            

           

              <View style={{flexDirection:'row',borderBottomColor: 'black',borderBottomWidth: 1,}}></View>
              <View style={{flexDirection:'row',height:150,width:'100%',marginTop:3,}}>

            <View style={{height:145,width:'50%',marginTop:3,}} >

           <ImageBackground  source={require('../Component/Images/orange.jpg')} style={{ resizeMode: 'contain',width: '85%', height: '100%',margin:5,marginLeft:10}}>
           <View style={{height:40,width:40,borderColor:'red',borderWidth:2,borderRadius:100,backgroundColor:'red'}}>
                    <Text style={{margin:5,marginLeft:10,color:'white',fontSize:10}}>15% Off</Text>
                </View>
           </ImageBackground>

            {/* <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',}}> Amul Butter:200 gms</Text> */}
            
            </View>
            <View style={{height:145,width:'50%',marginTop:3,}} >
                
           
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:30}}> Fresh orange </Text>
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:70,marginTop:0}}>800 gm </Text>
            
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:70,marginTop:5}}>$1.5.00 </Text>
            
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

            <ImageBackground  source={require('../Component/Images/mango.jpg')} style={{ resizeMode: 'contain',width: '90%', height: '100%',marginTop:5,marginLeft:5}}>
            <View style={{height:40,width:40,borderColor:'red',borderWidth:2,borderRadius:100,backgroundColor:'red',marginLeft:5}}>
                <Text style={{margin:5,marginLeft:10,color:'white',fontSize:10}}>5% Off</Text>
            </View>
            </ImageBackground>

            {/* <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',}}> Amul Butter:200 gms</Text> */}

            </View>
            <View style={{height:145,width:'50%',marginTop:3,}} >
                

            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',}}>Fresh Indian Mango </Text>
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:90,marginTop:0}}> 1 kg </Text>
                        
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

           <ImageBackground  source={require('../Component/Images/banana.jpg')} style={{ resizeMode: 'contain',width: '90%', height: '100%',marginTop:5,marginLeft:5}}>
           <View style={{height:40,width:40,borderColor:'red',borderWidth:2,borderRadius:100,backgroundColor:'red',marginLeft:5}}>
                    <Text style={{margin:5,marginLeft:10,color:'white',fontSize:10}}>12% Off</Text>
                </View>
           </ImageBackground>

            {/* <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',}}> Amul Butter:200 gms</Text> */}
            
            </View>
            <View style={{height:145,width:'50%',marginTop:3,}} >
                
           
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',}}> Fresh Banana 12pc</Text>
            
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:90,marginTop:10}}>$1.00 </Text>
            
            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:40,marginTop:10}}>Save $0.3.00 </Text>
            
            <TouchableOpacity
                style={[styles.buttonContainer, styles.loginButton]}>
                <Text style={styles.loginText}>Add To Cart</Text>
           </TouchableOpacity>
            </View>
            
            </View>




            <View style={{borderBottomColor: 'black',borderBottomWidth: 1,marginTop:10}}></View>

            <View style={{flexDirection:'row',height:150,width:'100%',marginTop:3,}}>

            <View style={{height:145,width:'50%',marginTop:3,}} >

            <ImageBackground  source={require('../Component/Images/kiwi.jpg')} style={{ resizeMode: 'contain',width: '90%', height: '80%',marginTop:25,marginLeft:8}}>
            <View style={{height:40,width:40,borderColor:'red',borderWidth:2,borderRadius:100,backgroundColor:'red',marginTop:-20,marginLeft:2}}>
                    <Text style={{margin:5,marginLeft:10,color:'white',fontSize:10}}>15% Off</Text>
                    </View>
            </ImageBackground>

            {/* <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',}}> Amul Butter:200 gms</Text> */}

            </View>
            <View style={{height:145,width:'50%',marginTop:3,}} >
    

            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:30}}> Fresh Kiwi 5pc </Text>

            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:90,marginTop:10}}>$2.00 </Text>

            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:40,marginTop:10}}>Save $0.7.00 </Text>

            <TouchableOpacity
                style={[styles.buttonContainer, styles.loginButton]}>
                <Text style={styles.loginText}>Add To Cart</Text>
            </TouchableOpacity>
            </View>

            </View>



            <View style={{borderBottomColor: 'black',borderBottomWidth: 1,marginTop:10}}></View>

            <View style={{flexDirection:'row',height:150,width:'100%',marginTop:3,}}>

            <View style={{height:145,width:'50%',marginTop:3,}} >

            <ImageBackground  source={require('../Component/Images/pine.png')} style={{ resizeMode: 'contain',width: '90%', height: '99%',marginTop:5,marginLeft:8}}>
            <View style={{height:40,width:40,borderColor:'red',borderWidth:2,borderRadius:100,backgroundColor:'red',marginLeft:5}}>
                  <Text style={{margin:5,marginLeft:10,color:'white',fontSize:10}}>12% Off</Text>
            </View>
            </ImageBackground>

            {/* <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',}}> Amul Butter:200 gms</Text> */}

            </View>
            <View style={{height:145,width:'50%',marginTop:3,}} >
    

            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:15}}> Fresh Pineapple</Text>

            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:80,marginTop:10}}>$1.5.00 </Text>

            <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',marginLeft:40,marginTop:5}}>Save $0.5.00 </Text>

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