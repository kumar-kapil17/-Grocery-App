import React, { Component } from 'react'
import { Text, View,ImageBackground,ScrollView, TouchableOpacity,Alert } from 'react-native'


export default class Profile extends Component {
    static navigationOptions = {
        headerShown: false
    }
    render() {
        return (
            <View style={{flex:1}}>
                <ScrollView
                showsVerticalScrollIndicator={false}>
                <View style={{flexDirection:'row',height:200,width:'100%',}}>

                <ImageBackground  source={require('../Component/Images/user.jpg')} style={{ resizeMode: 'contain',width: '100%', height: '100%'}}>
                </ImageBackground>

            </View>

            <Text style={{fontWeight:'normal',fontSize:24,letterSpacing:2,color:'red',textAlign:'center',marginTop:20}}> iGent </Text>
            <Text style={{fontWeight:'normal',fontSize:15,letterSpacing:2,color:'red',textAlign:'center',marginTop:5}}> developer.igent.@gmail.com </Text>

            <TouchableOpacity 
            onPress = {() => Alert.alert('Under Development') }
            style={{height:40,width:'95%',alignSelf:'center',borderRadius:5,borderColor:'grey',borderWidth:2,marginTop:45,marginLeft:4,shadowRadius:2}}>
            <Text style={{fontSize:15,letterSpacing:2,color:'black',textAlign:'left',marginTop:8}}> Offer </Text>

            </TouchableOpacity>

            <View style={{height:40,width:'95%',alignSelf:'center',borderRadius:5,borderColor:'grey',borderWidth:2,marginTop:45,marginLeft:4,shadowRadius:2}}>
            <Text style={{fontSize:15,letterSpacing:2,color:'black',textAlign:'left',marginTop:8}}> Savings </Text>

            </View>

            <View style={{height:40,width:'95%',alignSelf:'center',borderRadius:5,borderColor:'grey',borderWidth:2,marginTop:45,marginLeft:4,shadowRadius:2}}>
            <Text style={{fontSize:15,letterSpacing:2,color:'black',textAlign:'left',marginTop:8}}> Settings </Text>

            </View>

            <TouchableOpacity style={{height:40,width:'95%',alignSelf:'center',borderRadius:5,borderColor:'grey',borderWidth:2,marginTop:45,marginLeft:4,shadowRadius:2}}
              // onPress = {() => Alert.alert('Alert Title') } 
              onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={{fontSize:15,letterSpacing:2,color:'black',textAlign:'left',marginTop:8}}> Account </Text>

            </TouchableOpacity>

            <View style={{height:40,width:'95%',alignSelf:'center',borderRadius:5,borderColor:'grey',borderWidth:2,marginTop:45,marginLeft:4,shadowRadius:2}}>
            <Text style={{fontSize:15,letterSpacing:2,color:'black',textAlign:'left',marginTop:8}}> SignOut </Text>

            </View>

            <View style={{borderBottomColor: 'gray',borderBottomWidth: 1,marginTop:5}}></View>
            </ScrollView>

            </View>
        )
    }
}







// for loop code //

// import React, { Component } from 'react';
// import { View, Text } from 'react-native';

// export default class Profile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

//   render() {
//       var friends = ['Kapil','Razzo','Ashu','Abhay','raju']
//       for (let x of friends) {
//           console.log(x)
//       }

//     return (
//       <View style={{flex:1}}>
//         <Text> Profile </Text>
//       </View>
//     );
//   }
// }







/// Flatlist Code //


// import React, { Component } from 'react';

// import { AppRegistry, StyleSheet, FlatList, Text, View, Alert,Image } from 'react-native';

//  export default class Profile extends Component {

//   constructor(props)
//   {
//     super(props);

//     this.state = { FlatListItems: [

//       // { key: 'Monthly Focus'},

//       // { key: 'Lunch',icon: <Image source={require('./Images/1.jpg')}  style={{height:100, width:100}}/> },

//       { key: 'Fruits & Vegetables', icon: <Image
//       style={{width: 20, height: 20,}}
//       source={require('./Images/fruit.png')} />},

//       { key: 'Rice & Noodles', icon: <Image
//       style={{width: 20, height: 20}}
//       source={require('./Images/rice.png')} />},

//       { key: 'Oil & Masala', icon: <Image
//       style={{width: 20, height: 20}}
//       source={require('./Images/dippel-oil.png')} />},

//       { key: 'Baking & Mixes', icon: <Image
//       style={{width: 20, height: 20}}
//       source={require('./Images/bread.png')} />},

//       { key: 'Sauces & Seasonings', icon: <Image
//       style={{width: 20, height: 20}}
//       source={require('./Images/soy.png')} />},

//       { key: 'Snacks & Branded Foods', icon: <Image
//       style={{width: 20, height: 20}}
//       source={require('./Images/sandwich.png')} />},

//       { key: 'Beverages', icon: <Image
//       style={{width: 20, height: 20}}
//       source={require('./Images/soup.png')} />},

//       { key: 'Fresh & Frozen Fish', icon: <Image
//       style={{width: 20, height: 20}}
//       source={require('./Images/f.png')} />},

//       { key: 'Cakes', icon: <Image
//       style={{width: 20, height: 20}}
//       source={require('./Images/birthday.png')} />},

//       { key: 'Cleaning & Household', icon: <Image
//       style={{width: 20, height: 20}}
//       source={require('./Images/cleaning.png')} />},

//       { key: 'Baby Care', icon: <Image
//       style={{width: 20, height: 20}}
//       source={require('./Images/milk.png')} />},

//       { key: 'Beauty & Hair Care', icon: <Image
//       style={{width: 20, height: 20}}
//       source={require('./Images/dryer.png')} />},

//       { key: 'Meat & Eggs', icon: <Image
//       style={{width: 20, height: 20}}
//       source={require('./Images/meat.png')} />},

//     ]}
//   }

// FlatListItemSeparator = () => {
//     return (
//       <View
//         style={{
//           height: .5,
//           width: "100%",
//           backgroundColor: "#607D8B",
//           // marginTop:10
//         }}
//       />
//     );
//   }

//   GetItem (item) {

//   Alert.alert('under development');

//   }

//   render() {
//     return (

// <View style={styles.MainContainer}>

//          <Text style={{fontSize:20,fontWeight:'bold',margin:10,paddingLeft:10}}>Monthly Focus </Text>

//        <FlatList

//           data={ this.state.FlatListItems }

//           ItemSeparatorComponent = {this.FlatListItemSeparator}

//           renderItem={({item}) => <Text style={styles.item} onPress={this.GetItem.bind(this, item.key,item.icon)} >  {item.icon} {item.key} </Text>}
//          />

// </View>

//     );
//   }
// }

// const styles = StyleSheet.create({

//     MainContainer :{

//     // Setting up View inside content in Vertically center.
//     justifyContent: 'center',
//     flex:1,
//     margin: 10

//     },

//     item: {
//         padding: 10,
//         fontSize: 18,
//         height: 44,
//       },

// });

// // AppRegistry.registerComponent('Myproject', () => Myproject);










// Custom Searchable flatlist code//

// import React, { Component } from 'react';
// import {
//   SafeAreaView,
//   View,StyleSheet,
//   TouchableOpacity,
//   Text,
//   FlatList,
//   Image,
// ScrollView,
// TextInput,
//   Alert} from 'react-native';

// import {SearchBar} from 'react-native-elements';

// const data=[

//       // { key: 'Monthly Focus'},

//        { key: 'Fruits & Vegetables', icon: <Image
//       style={{width: 20, height: 20,}}
//       source={require('./Images/fruit.png')} />},

//       { key: 'Rice & Noodles', icon: <Image
//       style={{width: 20, height: 20}}
//       source={require('./Images/rice.png')} />},

//       { key: 'Oil & Masala', icon: <Image
//       style={{width: 20, height: 20}}
//       source={require('./Images/dippel-oil.png')} />},

//       { key: 'Baking & Mixes', icon: <Image
//       style={{width: 20, height: 20}}
//       source={require('./Images/bread.png')} />},

//       { key: 'Sauces & Seasonings', icon: <Image
//       style={{width: 20, height: 20}}
//       source={require('./Images/soy.png')} />},

//       { key: 'Snacks & Branded Foods', icon: <Image
//       style={{width: 20, height: 20}}
//       source={require('./Images/sandwich.png')} />},

//       { key: 'Beverages', icon: <Image
//       style={{width: 20, height: 20}}
//       source={require('./Images/soup.png')} />},

//       { key: 'Fresh & Frozen Fish', icon: <Image
//       style={{width: 20, height: 20}}
//       source={require('./Images/f.png')} />},

//       { key: 'Cakes', icon: <Image
//       style={{width: 20, height: 20}}
//       source={require('./Images/birthday.png')} />},

//       { key: 'Cleaning & Household', icon: <Image
//       style={{width: 20, height: 20}}
//       source={require('./Images/cleaning.png')} />},

//       { key: 'Baby Care', icon: <Image
//       style={{width: 20, height: 20}}
//       source={require('./Images/milk.png')} />},

//       { key: 'Beauty & Hair Care', icon: <Image
//       style={{width: 20, height: 20}}
//       source={require('./Images/dryer.png')} />},

//       { key: 'Meat & Eggs', icon: <Image
//       style={{width: 20, height: 20}}
//       source={require('./Images/meat.png')} />},
// ];

// export default class FlatListWithSearch extends Component {
//     constructor(){
//         super()
//         this.state={
//             data:data,
//             search:"",
//             scroll: true,
//         }
//     }
//   showItem=(data)=>{
//     Alert.alert(data);
//   }

//     renderHeader=()=>{
//       const { search } = this.state;
//         return(
//             // <SearchBar

//             // placeholder="Search Here"

//             // onChangeText={text=>this.searchAction(text)}
//             // autoCorrect={false}
//             // value={search}
//             // />

//            <View>
//            {/* <TextInput
//             placeholder="Search 18000+ Product"
//             onChangeText={text=>this.searchAction(text)}
//             autoCorrect={false}
//             value={search}
//             style={{height:40,width:'100%',borderWidth:1,borderRadius:5,padding: 10,}}
//            /> */}

//            <Text style={{fontSize:20,fontWeight:'bold',marginTop:10}}> Monthly Focus</Text>

//            </View>

//         )
//     }
//     searchAction = (text) => {
//         const newData=data.filter(item=>{
//             const itemData=`${item.key.toUpperCase()}`;
//             const textData=text.toUpperCase();
//             return itemData.indexOf(textData) > -1;

//         });
//         this.setState({
//             data:newData,
//             search:text
//         });
//     }

//     renderItem=(item)=>{
//       return(

//       <View  style={styles.item}>

//         <TouchableOpacity onPress={()=>this.showItem(item.key)}>
//           <Text style={{fontSize:18}}> {item.icon} {item.key} </Text>
//         </TouchableOpacity>
//         </View>

//       )
//     }
//     render(){
//         return(
//             <View style={styles.container}>

//                <View>
//                <TextInput
//                 placeholder="Search 18000+ Product"
//                 onChangeText={text=>this.searchAction(text)}
//                 autoCorrect={false}
//                 // value={search}
//                 style={{height:40,width:'100%',borderWidth:1,borderRadius:5,padding: 10,}}
//               />

//               <Text style={{fontSize:20,fontWeight:'bold',marginTop:10}}> Monthly Focus</Text>
//                </View>

//                 <FlatList
//                 data={this.state.data}
//                 renderItem={({item})=>this.renderItem(item)}
//                 keyExtractor={item=>item.key}
//                 // ListHeaderComponent={this.renderHeader}
//                 >
//                 </FlatList>

//             </View>

//         )
//     }
// }
// // export default FlatListWithSearch;

// const styles =StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: 10,
//         padding:10,

//       },
//       item:{
//         padding:10,
//         borderBottomWidth:.5,
//         borderRadius:5,
//         borderColor:"gray",
//         // marginBottom:10,
//         marginTop:0,

//       },

// });






