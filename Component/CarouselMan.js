import React, { Component } from "react";
import { Platform, StyleSheet, Text, View,name,Alert } from "react-native";
import Carousel from "./Carousel";

const images = [
   { image :require('../Component/Images/i2.jpg')} ,
   { image:require('../Component/Images/down1.jpg')},
   { image:require('../Component/Images/cookes.jpg')},
   {  image:  require('../Component/Images/org.jpg')},
   {  image:require('../Component/Images/organic.jpg')},
   {  image:require('../Component/Images/non.jpg')},
    
  
];


export default class CarouselMan extends Component {
  render() {
    return( 
    <View style={styles.container}>
        <Carousel images={images} />
         
   
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});