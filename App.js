import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { Icon } from 'react-native-elements'
import Entypo from 'react-native-vector-icons/Entypo';
// import { Icon } from 'react-native-vector-icons';
import Vegetables from './Component/Vegetables'
import Personal from './Component/Personal'
import Home from './Component/Home'
import Dairy from './Component/Dairy'
import Fruits from './Component/Fruits'
import Kids from './Component/Kids'
import Foods from './Component/Foods'
import Offer from './Component/Offer'
import Profile from './Component/Profile'
import Month from './Component/Month'
import  Saffola  from './Component/Saffola'
import Fortune from './Component/Fortune'
import Splash from './Component/Splash'
import Categories from './Component/Categories'
import Counter from './Component/Counter'
import Register from './Component/Register'
import SignUp from './Component/SignUp'
import Login from './Component/Login'



const ProfileStack = createStackNavigator ({

  Profile : {
     screen: Profile,
      navigationOptions: {
      headerShown: false,
    },
  },
  Register : {

    screen:  Register,
    // navigationOptions: {
    //   header: null,
    // },
    // () => <Saffola />
  },
  SignUp : {
     
    screen : SignUp,

  },

  Login : {
     
    screen : Login,

  },

});










const MonthStack = createStackNavigator ({

  Month : {
     screen: Month,
      navigationOptions: {
      headerShown: false,
    },
  },
  Saffola : {

    screen:  Saffola,
    // navigationOptions: {
    //   header: null,
    // },
    // () => <Saffola />
  },
  Fortune : {
     
    screen : Fortune,

  },

});


const Main = createStackNavigator({
 
  Home : {
     screen: Home,
  },
  Dairy:{

    screen:Dairy,
  },

  Foods:{

    screen:Foods,
  },
  Fruits:{

    screen: Fruits,
  },
  Vegetables:{

    screen: Vegetables,
  },
  Personal:{

    screen: Personal,
  },
  Kids:{

    screen: Kids,
  },
  Month:{

    screen: MonthStack,
    navigationOptions: {
      header: null,
      style: {
        elevation: 0,
       
      },
    },
  },
  
});

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = { isLoading: true }
  }

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        5000
      )
    );
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }

render() {
if (this.state.isLoading) {
     return <Splash />;
     } 
    return (

     <MyApp/>
      

    )
  }
}

const TabNav = createBottomTabNavigator(
  {
     Home:{
         screen:Main,
        // screen : HomeStack,
         navigationOptions:{
         tabBarLabel:'Home',
         activeColor:'#ff0000',
         inactiveColor:'#000000',
         barStyle:{backgroundColor: '#01CBC6',elevation: 0,},
         tabBarIcon:()=>(
          
             <Entypo name="home" size={25} color="red" />
            
          
         ),
       }
     },
     Categories:{

      screen:Categories,
     // screen : HomeStack,
      navigationOptions:{
      tabBarLabel:'Categories',
      activeColor:'#ff0000',
      inactiveColor:'#000000',
      barStyle:{backgroundColor: '#01CBC6',elevation: 0,},
      tabBarIcon:()=>(
       
          <Entypo name="grid" size={30} color="red" />
         
       
      ),
    }
  },
     Offer:{

        screen:Offer,
        navigationOptions:{
        tabBarLabel:'Offer',
        activeColor:'#ff0000',
        inactiveColor:'#000000',
        barStyle:{backgroundColor: '#01CBC6',elevation: 0,},
        tabBarIcon:()=>(
          <Entypo name="price-tag" size={25} color="red" />
        )
      }
     },
     Profile:{

      screen:ProfileStack,
      navigationOptions:{
      tabBarLabel:'Profile',
      activeColor:'#ff0000',
      inactiveColor:'#000000',
      barStyle:{backgroundColor: '#01CBC6',elevation: 0,},
      tabBarIcon:()=>(

        <Entypo name="user" size={25} color="red" />

          // <View>
          //   <Icon name="account-circle" size={30} style={{color:'#ff0000'}} />
          // </View>
      )
    }
   },
   
  }
);
  
   console.disableYellowBox = true;
   const MyApp = createAppContainer(TabNav);  