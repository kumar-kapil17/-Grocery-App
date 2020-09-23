import React, { Component } from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';

export default class Main extends Component {
  constructor(props) {
    super(props);
   this.state = {
       count: 1,
    };
  }



// onPress = () => {
//     this.setState({
//         count: this.state.count +1
//     })
// }


increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }




//   reset =() => {
//     this.setState({
//         count: this.state.count -1
//     });
//   };


decrement = ()=> {
    if(this.state.count > 1){
       this.setState(prevState => ({count: prevState.count -1 }))
    }
 }






  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        
        


        <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',height:30,width:100,borderWidth:1,borderColor:'gray',marginTop:55,marginLeft:30,borderRadius:5}}>

                    <TouchableOpacity 
                    onPress = {this.decrement}
                        >

                    <Image source = {require('../Component/Images/minus.png')} style={{height:20,width:20,}}  />

                  </TouchableOpacity>



                  <Text > {this.state.count}  </Text> 




                <TouchableOpacity 
                onPress={this.increment}
              >
                
                 <Image source = {require('../Component/Images/plus.png')} style={{height:20,width:20}}  />


                </TouchableOpacity>
        </View>

      </View>
    );
  }
}
