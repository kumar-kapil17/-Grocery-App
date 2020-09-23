// import React, { Component } from 'react';
// import { View, Text,ImageBackground,TextInput,TouchableOpacity,Alert } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'

// export default class Categories extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//     return (
//     <View style={{flex:1,backgroundColor:'white'}}>
       
//        <View style={{height:120,width:'100%',backgroundColor:'white',}}>
//           <View style={{height:60,width:'100%'}}>
//              <Text style={{fontSize:25,fontWeight:'bold',marginLeft:0,marginTop:10,textAlign:'center'}}>Categories</Text>
//           </View>


//           <View style={{height:40,width:'95%',paddingLeft:15,backgroundColor:'white',marginLeft:10,marginTop:5,borderRadius:5,borderColor:'gray',borderWidth:1}}>
//       <TextInput
              
//               keyboardType={'name-phone-pad'}
//               textStyle={{color: 'white'}}
//               placeholder="Search 18000+ Product"
//               underlineColorAndroid="transparent">
//       </TextInput>
//       <ImageBackground  source={require('../Component/Images/search.png')} style={{ resizeMode: 'contain',width: 15, height:15,marginLeft:290,marginTop:-25,}}>
//      </ImageBackground>




//     </View>
    
//     </View>


// <ScrollView
// vertical={true}
// showsVerticalScrollIndicator={false}>




//  <Text style={{fontSize:18,fontWeight:'bold',marginLeft:10}}>Monthly Focus</Text>
//  <View style={{opacity:0.3,borderBottomColor: 'gray',borderBottomWidth: 1,marginTop:5}}></View>

//  <TouchableOpacity style={{flexDirection:'row',height:35,width:'100%',marginTop:2,}}
//  onPress = {() => Alert.alert('Under Development') }>
//      <View style={{height:30,width:45,marginTop:0,alignSelf:'center',marginLeft:4}}>
//          <Icon name={'food-apple-outline'} size={30} style={{color:'gray',marginTop:-3,marginLeft:0}} />
//      </View>

//      <View style={{height:30,width:220,marginTop:0,alignSelf:'center',}}>
//          <Text style={{fontSize:15,textAlign:'left',margin:3}}>Fruits & Vegetables</Text>
//      </View>

//      <View style={{height:30,width:45,marginTop:0,alignSelf:'center',marginLeft:4}}>
//          <Icon name={'menu-down'} size={35} style={{color:'gray',marginTop:0,marginLeft:20}} />
//      </View>


//  </TouchableOpacity>
// <View style={{opacity:0.3,borderBottomColor: 'gray',borderBottomWidth: 1,marginTop:5}}></View>



// <View style={{flexDirection:'row',height:35,width:'100%',marginTop:2,}}>
//      <View style={{height:30,width:45,marginTop:0,alignSelf:'center',marginLeft:4}}>
//          <Icon name={'rice'} size={30} style={{color:'gray',marginTop:-3,marginLeft:0}} />
//      </View>

//      <View style={{height:30,width:220,marginTop:0,alignSelf:'center',}}>
//          <Text style={{fontSize:15,textAlign:'left',margin:3}}>Rice & Noodles</Text>
//      </View>

//      <View style={{height:30,width:45,marginTop:0,alignSelf:'center',marginLeft:4}}>
//          <Icon name={'menu-down'} size={35} style={{color:'gray',marginTop:0,marginLeft:20}} />
//      </View>


//  </View>
// <View style={{opacity:0.3,borderBottomColor: 'gray',borderBottomWidth: 1,marginTop:5}}></View>



// <View style={{flexDirection:'row',height:35,width:'100%',marginTop:2,}}>
//      <View style={{height:30,width:45,marginTop:0,alignSelf:'center',marginLeft:4}}>
//          <Icon name={'oil'} size={30} style={{color:'gray',marginTop:-3,marginLeft:0}} />
//      </View>

//      <View style={{height:30,width:220,marginTop:0,alignSelf:'center',}}>
//          <Text style={{fontSize:15,textAlign:'left',margin:3}}>Oil & Masala</Text>
//      </View>

//      <View style={{height:30,width:45,marginTop:0,alignSelf:'center',marginLeft:4}}>
//          <Icon name={'menu-down'} size={35} style={{color:'gray',marginTop:0,marginLeft:20}} />
//      </View>


//  </View>
// <View style={{opacity:0.3,borderBottomColor: 'gray',borderBottomWidth: 1,marginTop:5}}></View>


// <View style={{flexDirection:'row',height:35,width:'100%',marginTop:2,}}>
//      <View style={{height:30,width:45,marginTop:0,alignSelf:'center',marginLeft:4}}>
//          <Icon name={'bread-slice-outline'} size={30} style={{color:'gray',marginTop:-3,marginLeft:0}} />
//      </View>

//      <View style={{height:30,width:220,marginTop:0,alignSelf:'center',}}>
//          <Text style={{fontSize:15,textAlign:'left',margin:3}}>Baking & Mixes</Text>
//      </View>

//      <View style={{height:30,width:45,marginTop:0,alignSelf:'center',marginLeft:4}}>
//          <Icon name={'menu-down'} size={35} style={{color:'gray',marginTop:0,marginLeft:20}} />
//      </View>


//  </View>
// <View style={{opacity:0.3,borderBottomColor: 'gray',borderBottomWidth: 1,marginTop:5}}></View>


// <View style={{flexDirection:'row',height:35,width:'100%',marginTop:2,}}>
//      <View style={{height:30,width:45,marginTop:0,alignSelf:'center',marginLeft:4}}>
//          <Icon name={'soy-sauce'} size={30} style={{color:'gray',marginTop:2,marginLeft:0}} />
//      </View>

//      <View style={{height:30,width:220,marginTop:0,alignSelf:'center',}}>
//          <Text style={{fontSize:15,textAlign:'left',margin:3}}>Sauces & Seasonings</Text>
//      </View>

//      <View style={{height:30,width:45,marginTop:0,alignSelf:'center',marginLeft:4}}>
//          <Icon name={'menu-down'} size={35} style={{color:'gray',marginTop:0,marginLeft:20}} />
//      </View>


//  </View>
// <View style={{opacity:0.3,borderBottomColor: 'gray',borderBottomWidth: 1,marginTop:5}}></View>



// <View style={{flexDirection:'row',height:35,width:'100%',marginTop:2,}}>
//      <View style={{height:30,width:45,marginTop:0,alignSelf:'center',marginLeft:4}}>
//          <Icon name={'food'} size={30} style={{color:'gray',marginTop:-3,marginLeft:0}} />
//      </View>

//      <View style={{height:30,width:220,marginTop:0,alignSelf:'center',}}>
//          <Text style={{fontSize:15,textAlign:'left',margin:3}}>Snacks & Branded Foods</Text>
//      </View>

//      <View style={{height:30,width:45,marginTop:0,alignSelf:'center',marginLeft:4}}>
//          <Icon name={'menu-down'} size={35} style={{color:'gray',marginTop:0,marginLeft:20}} />
//      </View>


//  </View>
// <View style={{opacity:0.3,borderBottomColor: 'gray',borderBottomWidth: 1,marginTop:5}}></View>



// <View style={{flexDirection:'row',height:35,width:'100%',marginTop:2,}}>
//      <View style={{height:30,width:45,marginTop:0,alignSelf:'center',marginLeft:4}}>
//          <Icon name={'tea-outline'} size={30} style={{color:'gray',marginTop:-3,marginLeft:0}} />
//      </View>

//      <View style={{height:30,width:220,marginTop:0,alignSelf:'center',}}>
//          <Text style={{fontSize:15,textAlign:'left',margin:3}}>Beverages</Text>
//      </View>

//      <View style={{height:30,width:45,marginTop:0,alignSelf:'center',marginLeft:4}}>
//          <Icon name={'menu-down'} size={35} style={{color:'gray',marginTop:0,marginLeft:20}} />
//      </View>


//  </View>
// <View style={{opacity:0.3,borderBottomColor: 'gray',borderBottomWidth: 1,marginTop:5}}></View>


// <View style={{flexDirection:'row',height:35,width:'100%',marginTop:2,}}>
//      <View style={{height:30,width:45,marginTop:0,alignSelf:'center',marginLeft:4}}>
//          <Icon name={'fish'} size={30} style={{color:'gray',marginTop:-3,marginLeft:0}} />
//      </View>

//      <View style={{height:30,width:220,marginTop:0,alignSelf:'center',}}>
//          <Text style={{fontSize:15,textAlign:'left',margin:3}}>Fresh & Frozen Fish</Text>
//      </View>

//      <View style={{height:30,width:45,marginTop:0,alignSelf:'center',marginLeft:4}}>
//          <Icon name={'menu-down'} size={35} style={{color:'gray',marginTop:0,marginLeft:20}} />
//      </View>


//  </View>
// <View style={{opacity:0.3,borderBottomColor: 'gray',borderBottomWidth: 1,marginTop:5}}></View>


// <View style={{flexDirection:'row',height:35,width:'100%',marginTop:2,}}>
//      <View style={{height:30,width:45,marginTop:0,alignSelf:'center',marginLeft:4}}>
//          <Icon name={'cupcake'} size={30} style={{color:'gray',marginTop:-3,marginLeft:0}} />
//      </View>

//      <View style={{height:30,width:220,marginTop:0,alignSelf:'center',}}>
//          <Text style={{fontSize:15,textAlign:'left',margin:3}}>Cakes</Text>
//      </View>

//      <View style={{height:30,width:45,marginTop:0,alignSelf:'center',marginLeft:4}}>
//          <Icon name={'menu-down'} size={35} style={{color:'gray',marginTop:0,marginLeft:20}} />
//      </View>


//  </View>
// <View style={{opacity:0.3,borderBottomColor: 'gray',borderBottomWidth: 1,marginTop:5}}></View>


// <View style={{flexDirection:'row',height:35,width:'100%',marginTop:2,}}>
//      <View style={{height:30,width:45,marginTop:0,alignSelf:'center',marginLeft:4}}>
//          <Icon name={'silverware-clean'} size={30} style={{color:'gray',marginTop:-3,marginLeft:0}} />
//      </View>

//      <View style={{height:30,width:220,marginTop:0,alignSelf:'center',}}>
//          <Text style={{fontSize:15,textAlign:'left',margin:3}}>Cleaning & Household</Text>
//      </View>

//      <View style={{height:30,width:45,marginTop:0,alignSelf:'center',marginLeft:4}}>
//          <Icon name={'menu-down'} size={35} style={{color:'gray',marginTop:0,marginLeft:20}} />
//      </View>


//  </View>
// <View style={{opacity:0.3,borderBottomColor: 'gray',borderBottomWidth: 1,marginTop:5}}></View>



// <View style={{flexDirection:'row',height:35,width:'100%',marginTop:2,}}>
//      <View style={{height:30,width:45,marginTop:0,alignSelf:'center',marginLeft:4}}>
//          <Icon name={'baby-bottle-outline'} size={30} style={{color:'gray',marginTop:-3,marginLeft:0}} />
//      </View>

//      <View style={{height:30,width:220,marginTop:0,alignSelf:'center',}}>
//          <Text style={{fontSize:15,textAlign:'left',margin:3}}>Baby Care</Text>
//      </View>

//      <View style={{height:30,width:45,marginTop:0,alignSelf:'center',marginLeft:4}}>
//          <Icon name={'menu-down'} size={35} style={{color:'gray',marginTop:0,marginLeft:20}} />
//      </View>


//  </View>
// <View style={{opacity:0.3,borderBottomColor: 'gray',borderBottomWidth: 1,marginTop:5}}></View>


// <View style={{flexDirection:'row',height:35,width:'100%',marginTop:2,}}>
//      <View style={{height:30,width:45,marginTop:0,alignSelf:'center',marginLeft:4}}>
//          <Icon name={'hair-dryer-outline'} size={30} style={{color:'gray',marginTop:2,marginLeft:0}} />
//      </View>

//      <View style={{height:30,width:220,marginTop:0,alignSelf:'center',}}>
//          <Text style={{fontSize:15,textAlign:'left',margin:3}}>Beauty & Hair Care</Text>
//      </View>

//      <View style={{height:30,width:45,marginTop:0,alignSelf:'center',marginLeft:4}}>
//          <Icon name={'menu-down'} size={35} style={{color:'gray',marginTop:0,marginLeft:20}} />
//      </View>


//  </View>
// <View style={{opacity:0.3,borderBottomColor: 'gray',borderBottomWidth: 1,marginTop:5}}></View>


// <View style={{flexDirection:'row',height:35,width:'100%',marginTop:2,}}>
//      <View style={{height:30,width:45,marginTop:0,alignSelf:'center',marginLeft:4}}>
//          <Icon name={'food-steak'} size={30} style={{color:'gray',marginTop:-2,marginLeft:0}} />
//      </View>

//      <View style={{height:30,width:220,marginTop:0,alignSelf:'center',}}>
//          <Text style={{fontSize:15,textAlign:'left',margin:3}}>Meat & Eggs</Text>
//      </View>

//      <View style={{height:30,width:45,marginTop:0,alignSelf:'center',marginLeft:4}}>
//          <Icon name={'menu-down'} size={35} style={{color:'gray',marginTop:0,marginLeft:20}} />
//      </View>


//  </View>
// <View style={{opacity:0.3,borderBottomColor: 'gray',borderBottomWidth: 1,marginTop:5}}></View>



// </ScrollView>


//       </View>
//     );
//   }
// }







// Searchable Flatlist Code//

import React, { Component } from 'react';
import {
  SafeAreaView,
  View,StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
  ScrollView,
  TextInput,
  ImageBackground,
  Alert} from 'react-native';

import {SearchBar} from 'react-native-elements';



const data=[
         
      // { key: 'Monthly Focus'},

  
      { key: 'Fruits & Vegetables', icon: <Image
         style={{width: 20, height: 20,}}
         source={require('./Images/fr.png')} />,
        //  ic: <Image
        //  style={{height:15,width:15,}}
        //  source={require('./Images/menu.png')} />
        },

      { key: 'Rice & Noodles', icon: <Image
      style={{width: 20, height: 20}}
      source={require('./Images/rice11.png')} />},

      { key: 'Oil & Masala', icon: <Image
      style={{width: 20, height: 20}}
      source={require('./Images/dippel-oil.png')} />},

      { key: 'Baking & Mixes', icon: <Image
      style={{width: 20, height: 20}}
      source={require('./Images/bread.png')} />},

      { key: 'Sauces & Seasonings', icon: <Image
      style={{width: 20, height: 20}}
      source={require('./Images/soy.png')} />},

      { key: 'Snacks & Branded Foods', icon: <Image
      style={{width: 20, height: 20}}
      source={require('./Images/sandwich.png')} />},

      { key: 'Beverages', icon: <Image
      style={{width: 20, height: 20}}
      source={require('./Images/soup.png')} />},

      { key: 'Fresh & Frozen Fish', icon: <Image
      style={{width: 20, height: 20}}
      source={require('./Images/f.png')} />},

      { key: 'Cakes', icon: <Image
      style={{width: 20, height: 20}}
      source={require('./Images/birthday.png')} />},

      { key: 'Cleaning & Household', icon: <Image
      style={{width: 20, height: 20}}
      source={require('./Images/cleaning.png')} />},

      { key: 'Baby Care', icon: <Image
      style={{width: 20, height: 20}}
      source={require('./Images/milk.png')} />},

      { key: 'Beauty & Hair Care', icon: <Image
      style={{width: 20, height: 20}}
      source={require('./Images/dryer.png')} />},

      { key: 'Meat & Eggs', icon: <Image
      style={{width: 20, height: 20}}
      source={require('./Images/meat.png')} />},  
];


export default class Categories extends Component {
    constructor(){
        super()
        this.state={
            data:data,
            search:"",
            scroll: true,
        }
    }
  showItem=(data)=>{
    Alert.alert('Under Development');
  }

    renderHeader=()=>{
    //   const { search } = this.state;
        return(
           
           <View>
           {/* <TextInput 
            placeholder="Search 18000+ Product"
            onChangeText={text=>this.searchAction(text)}
            autoCorrect={false}
            value={search}
            style={{height:40,width:'100%',borderWidth:1,borderRadius:5,padding: 10,}}
           /> */}
           
           {/* <Text style={{fontSize:20,fontWeight:'bold',marginTop:10}}> Monthly Focus</Text> */}

           </View>
           
        )
    }
    searchAction = (text) => {
        const newData=data.filter(item=>{
            const itemData=`${item.key.toUpperCase()}`;
            const textData=text.toUpperCase();
            return itemData.indexOf(textData) > -1;

        });
        this.setState({
            data:newData,
            search:text
        });
    }
  

    renderItem=(item)=>{
      return(
        
      <View  style={styles.item}>

     
        <TouchableOpacity onPress={()=>this.showItem(item.key)}>
          <Text style={{fontSize:18}}> {item.icon} {item.key}   </Text>
        </TouchableOpacity>
        </View> 
    
      )
    }
    render(){
        return(
            <View style={styles.container}>
              
               <View>
               <TextInput 
                placeholder="Search 18000+ Product"
                onChangeText={text=>this.searchAction(text)}
                autoCorrect={false}
                // value={search}
                style={{height:40,width:'100%',borderWidth:1,borderRadius:5,padding: 10,}}
              />
               <ImageBackground  source={require('../Component/Images/search.png')} style={{ resizeMode: 'contain',width: 15, height:15,marginLeft:290,marginTop:-25,}}>
               </ImageBackground>
           
              <Text style={{fontSize:20,fontWeight:'bold',marginTop:20}}> Monthly Focus</Text>
               </View>

            
                <FlatList
                data={this.state.data}
                renderItem={({item})=>this.renderItem(item)}
                keyExtractor={item=>item.key}
                // ListHeaderComponent={this.renderHeader}
                >
                </FlatList>
        

            </View>         
            
        )
    }
}
// export default FlatListWithSearch;

const styles =StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        padding:10,
        
      },
      item:{
        padding:10,
        borderBottomWidth:.5,
        borderRadius:5,
        borderColor:"gray", 
        // marginBottom:10,
        marginTop:0,
       

      },

    
});

