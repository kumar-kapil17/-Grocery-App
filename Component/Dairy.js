import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  Picker,
  Alert,
} from 'react-native';

import Counter from './Counter';

export default class Dairy extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    choosenIndex: 0,
    show: false,
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              marginLeft: 0,
              marginTop: 10,
              textAlign: 'center',
            }}>
            {' '}
            Dairy Product
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              marginTop: 10,
            }}></View>

          <View
            style={{
              flexDirection: 'row',
              height: 190,
              width: '100%',
              marginTop: 3,
            }}>
            <View style={{height: 145, width: '50%', marginTop: 3}}>
              <ImageBackground
                source={require('../Component/Images/amul.png')}
                style={{
                  resizeMode: 'contain',
                  width: '94%',
                  height: '80%',
                  marginTop: 25,
                }}></ImageBackground>

              {/* <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',}}> Amul Butter:200 gms</Text> */}
            </View>

            <View style={{height: 145, width: '50%', marginTop: 3}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  letterSpacing: 0,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginLeft: 40,
                }}>
                {' '}
                Amul Butter
              </Text>

              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  letterSpacing: 0,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginLeft: 90,
                  marginTop: 10,
                }}>
                $1.00{' '}
              </Text>

              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  letterSpacing: 0,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginLeft: 40,
                  marginTop: 10,
                }}>
                Save $0.5.00{' '}
              </Text>



              {/* {this.state.show ? (
                <Counter />
              ) : (
                <TouchableOpacity
                  style={[styles.buttonContainer, styles.loginButton]}
                  onPress={() =>
                    this.setState({show: !this.state.show})

                    // {this.state.show ? <Counter /> : null}

                  }>
                  <Text style={styles.loginText}>Add To Cart</Text>
                </TouchableOpacity>
              )} */}




            <Counter />

            <TouchableOpacity
              onPress={() => Alert.alert('Under Development')}
              style={{height: 30,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: 100,justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                backgroundColor: 'green',
                marginLeft: 30,
                marginTop: 65,
                borderRadius: 5,}}>
              <Text style={styles.loginText}>Add To Cart</Text>
            </TouchableOpacity>




            </View>

            <View
              style={{
                height: 30,
                width: 200,
                marginLeft: -350,
                marginTop: 150,
              }}>
              <View
                style={{
                  width: 190,
                  height: 25,
                  borderColor: 'grey',
                  borderWidth: 1,
                  backgroundColor: 'white',
                  //  opacity:0.6,
                  alignContent: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius:5
                }}>
                <Picker
                  style={{
                    height: 150,
                    width: '80%',
                    color: '#344953',
                    alignItems: 'flex-start',
                  }}
                  selectedValue={this.state.language}
                  onValueChange={(itemValue, itemPosition) =>
                    this.setState({
                      language: itemValue,
                      choosenIndex: itemPosition,
                    })
                  }>
                  <Picker.Item label="250 gms  $1" value="200 gms   $1" />
                  <Picker.Item label="400 gms  $2" value="500 gms   $2" />
                  <Picker.Item label="950 gms  $3" value="700 gms   $3" />
                </Picker>
              </View>
            </View>
          </View>

          {/* <TouchableOpacity>
             <View style={{height:25,width:60,borderColor:'gray',borderRadius:5,borderWidth:1,marginLeft:20,marginTop:140}}>
              <Text>500 gms</Text>
           </View>
           </TouchableOpacity> */}

          {/* </View> */}

          <View
            style={{
              flexDirection: 'row',
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              height: 180,
              width: '100%',
              marginTop: 3,
            }}>
            <View style={{height: 145, width: '50%', marginTop: 3}}>
              <ImageBackground
                source={require('../Component/Images/amul2.jpg')}
                style={{
                  resizeMode: 'contain',
                  width: '85%',
                  height: '80%',
                  marginTop: 15,
                  marginLeft: 15,
                }}></ImageBackground>

              {/* <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',}}> Amul Butter:200 gms</Text> */}
            </View>

            
            <View style={{height: 145, width: '50%', marginTop: 3}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  letterSpacing: 0,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginLeft: 40,
                }}>
                {' '}
                Amul Butter
              </Text>

              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  letterSpacing: 0,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginLeft: 90,
                  marginTop: 10,
                }}>
                $1.00{' '}
              </Text>

              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  letterSpacing: 0,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginLeft: 40,
                  marginTop: 10,
                }}>
                Save $0.5.00{' '}
              </Text>


              <Counter />

              <TouchableOpacity
                onPress={() => Alert.alert('Under Development')}
                style={[styles.buttonContainer, styles.loginButton]}>
                <Text style={styles.loginText}>Add To Cart</Text>
              </TouchableOpacity>

              {/* <TouchableOpacity style={{height:25,width:60,borderColor:'gray',borderRadius:5,borderWidth:1,marginLeft:-320,marginTop:140}}>
                 <Text>200 gms</Text>
        
           </TouchableOpacity>

           <TouchableOpacity>
             <View style={{height:25,width:60,borderColor:'gray',borderRadius:5,borderWidth:1,marginLeft:20,marginTop:140}}>
              <Text>500 gms</Text>
           </View>
           </TouchableOpacity> */}

              <View
                style={{
                  height: 30,
                  width: 200,
                  marginLeft: -170,
                  marginTop: -30,
                }}>
                <View
                  style={{
                    width: 190,
                    height: 25,
                    borderColor: 'grey',
                    borderWidth: 1,
                    backgroundColor: 'white',
                    //  opacity:0.6,
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius:5
                  }}>
                  <Picker
                    style={{
                      height: 150,
                      width: '80%',
                      color: '#344953',
                      alignItems: 'flex-start',
                    }}
                    selectedValue={this.state.language}
                    onValueChange={(itemValue, itemPosition) =>
                      this.setState({
                        language: itemValue,
                        choosenIndex: itemPosition,
                      })
                    }>
                    <Picker.Item label="200 gms  $1" value="200 gms     $1" />
                    <Picker.Item label="500 gms  $2" value="500 gms     $2" />
                    <Picker.Item label="700 gms  $3" value="700 gms     $3" />
                  </Picker>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              marginTop: 10,
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              height: 180,
              width: '100%',
              marginTop: 3,
            }}>
            <View style={{height: 145, width: '50%', marginTop: 3}}>
              <ImageBackground
                source={require('../Component/Images/deli.jpg')}
                style={{
                  resizeMode: 'contain',
                  width: '90%',
                  height: '80%',
                  marginTop: 15,
                  marginLeft: 5,
                }}></ImageBackground>

              {/* <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',}}> Amul Butter:200 gms</Text> */}
            </View>
            <View style={{height: 145, width: '50%', marginTop: 3}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  letterSpacing: 0,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginLeft: 40,
                }}>
                {' '}
                Amul Butter
              </Text>

              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  letterSpacing: 0,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginLeft: 90,
                  marginTop: 10,
                }}>
                $1.00{' '}
              </Text>

              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  letterSpacing: 0,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginLeft: 40,
                  marginTop: 10,
                }}>
                Save $0.5.00{' '}
              </Text>


<Counter />
              <TouchableOpacity
                onPress={() => Alert.alert('Under Development')}
                style={[styles.buttonContainer, styles.loginButton]}>
                <Text style={styles.loginText}>Add To Cart</Text>
              </TouchableOpacity>

              {/* <TouchableOpacity style={{height:25,width:60,borderColor:'gray',borderRadius:5,borderWidth:1,marginLeft:-320,marginTop:140}}>
               <Text>200 gms</Text>
      
           </TouchableOpacity>

           <TouchableOpacity>
             <View style={{height:25,width:60,borderColor:'gray',borderRadius:5,borderWidth:1,marginLeft:20,marginTop:140}}>
              <Text>500 gms</Text>
           </View>
           </TouchableOpacity> */}

              <View
                style={{
                  height: 30,
                  width: 200,
                  marginLeft: -170,
                  marginTop: -30,
                }}>
                <View
                  style={{
                    width: 190,
                    height: 25,

                    borderColor: 'grey',
                    borderWidth: 1,
                    backgroundColor: 'white',
                    //  opacity:0.6,
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius:5
                  }}>
                  <Picker
                    style={{
                      height: 150,
                      width: '80%',
                      color: '#344953',
                      alignItems: 'flex-start',
                    }}
                    selectedValue={this.state.language}
                    onValueChange={(itemValue, itemPosition) =>
                      this.setState({
                        language: itemValue,
                        choosenIndex: itemPosition,
                      })
                    }>
                    <Picker.Item label="150 gms  $1" value="200 gms  $1" />
                    <Picker.Item label="450 gms  $2" value="500 gms  $2" />
                    <Picker.Item label="600 gms  $3" value="700 gms $3" />
                  </Picker>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              marginTop: 10,
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              height: 180,
              width: '100%',
              marginTop: 3,
            }}>
            <View style={{height: 145, width: '50%', marginTop: 3}}>
              <ImageBackground
                source={require('../Component/Images/nutralite.jpg')}
                style={{
                  resizeMode: 'contain',
                  width: '90%',
                  height: '80%',
                  marginTop: 15,
                }}></ImageBackground>

              {/* <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',}}> Amul Butter:200 gms</Text> */}
            </View>
            <View style={{height: 145, width: '50%', marginTop: 3}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  letterSpacing: 0,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginLeft: 40,
                }}>
                {' '}
                Amul Butter
              </Text>

              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  letterSpacing: 0,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginLeft: 90,
                  marginTop: 10,
                }}>
                $1.00{' '}
              </Text>

              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  letterSpacing: 0,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginLeft: 40,
                  marginTop: 10,
                }}>
                Save $0.5.00{' '}
              </Text>


<Counter />

              <TouchableOpacity
                onPress = {() => Alert.alert('Under Development') }
                style={[styles.buttonContainer, styles.loginButton]}>
                <Text style={styles.loginText}>Add To Cart</Text>
              </TouchableOpacity>

              {/* <TouchableOpacity style={{height:25,width:60,borderColor:'gray',borderRadius:5,borderWidth:1,marginLeft:-320,marginTop:140}}>
            <Text>200 gms</Text>
         
           </TouchableOpacity>

           <TouchableOpacity>
             <View style={{height:25,width:60,borderColor:'gray',borderRadius:5,borderWidth:1,marginLeft:20,marginTop:140}}>
              <Text>500 gms</Text>
           </View>
           </TouchableOpacity> */}

              <View
                style={{
                  height: 30,
                  width: 200,
                  marginLeft: -170,
                  marginTop: -30,
                }}>
                <View
                  style={{
                    width: 190,
                    height: 25,

                    borderColor: 'grey',
                    borderWidth: 1,
                    backgroundColor: 'white',
                    //  opacity:0.6,
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius:5
                  }}>
                  <Picker
                    style={{
                      height: 150,
                      width: '80%',
                      color: '#344953',
                      alignItems: 'flex-start',
                    }}
                    selectedValue={this.state.language}
                    onValueChange={(itemValue, itemPosition) =>
                      this.setState({
                        language: itemValue,
                        choosenIndex: itemPosition,
                      })
                    }>
                    <Picker.Item
                      label="300 gms     $1"
                      value="200 gms     $1"
                    />
                    <Picker.Item
                      label="550 gms     $2"
                      value="500 gms     $2"
                    />
                    <Picker.Item
                      label="750 gms     $3"
                      value="700 gms     $3"
                    />
                  </Picker>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              marginTop: 10,
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              height: 180,
              width: '100%',
              marginTop: 3,
            }}>
            <View style={{height: 145, width: '50%', marginTop: 3}}>
              <ImageBackground
                source={require('../Component/Images/unsalted.jpg')}
                style={{
                  resizeMode: 'contain',
                  width: '90%',
                  height: '80%',
                  marginTop: 15,
                  marginLeft: 8,
                }}></ImageBackground>

              {/* <Text style={{fontWeight:'bold',fontSize:15,letterSpacing:0,fontWeight:'bold',textAlign:'center',}}> Amul Butter:200 gms</Text> */}
            </View>
            <View style={{height: 145, width: '50%', marginTop: 3}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  letterSpacing: 0,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginLeft: 40,
                }}>
                {' '}
                Amul Butter
              </Text>

              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  letterSpacing: 0,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginLeft: 90,
                  marginTop: 10,
                }}>
                $1.00{' '}
              </Text>

              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  letterSpacing: 0,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginLeft: 40,
                  marginTop: 10,
                }}>
                Save $0.5.00{' '}
              </Text>

              <Counter />

              <TouchableOpacity
                onPress = {() => Alert.alert('Under Development') }
                style={[styles.buttonContainer, styles.loginButton]}>
                <Text style={styles.loginText}>Add To Cart</Text>
              </TouchableOpacity>

              {/* <TouchableOpacity style={{height:25,width:60,borderColor:'gray',borderRadius:5,borderWidth:1,marginLeft:-320,marginTop:140}}>
            <Text>200 gms</Text>
          
           </TouchableOpacity>

           <TouchableOpacity>
             <View style={{height:25,width:60,borderColor:'gray',borderRadius:5,borderWidth:1,marginLeft:20,marginTop:140}}>
              <Text>500 gms</Text>
           </View>
           </TouchableOpacity> */}

              <View
                style={{
                  height: 30,
                  width: 200,
                  marginLeft: -170,
                  marginTop: -30,
                }}>
                <View
                  style={{
                    width: 190,
                    height: 25,

                    borderColor: 'grey',
                    borderWidth: 1,
                    backgroundColor: 'white',
                    //  opacity:0.6,
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius:5
                  }}>
                  <Picker
                    style={{
                      height: 150,
                      width: '80%',
                      color: '#344953',
                      alignItems: 'flex-start',
                    }}
                    selectedValue={this.state.language}
                    onValueChange={(itemValue, itemPosition) =>
                      this.setState({
                        language: itemValue,
                        choosenIndex: itemPosition,
                      })
                    }>
                    <Picker.Item label="250 gms   $1" value="250 gms     $1" />
                    <Picker.Item label="650 gms   $2" value="500 gms     $2" />
                    <Picker.Item
                      label="1 kg            $3"
                      value="1 kg        $3"
                    />
                  </Picker>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              marginTop: 10,
            }}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'green',
    marginLeft: 30,
    marginTop: 65,
    //   marginBottom:30,
    borderRadius: 5,
    // opacity: 1,
  },
  loginText: {
    color: 'white',
    fontSize: 15,
    //    fontFamily:'fantasy',
    textAlign: 'center',
  },
});
