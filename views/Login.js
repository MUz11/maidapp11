import * as React from 'react';
import { Button } from 'react-native-elements';


import {StyleSheet, View, Text,TextInput,Image,TouchableHighlight } from 'react-native';



export default function LoginScreen({navigation}) {
    const go_to_home = ()=>{
        navigation.navigate('Home')
    };
    const go_to_register =() =>{
        navigation.navigate('Register')
    };
    


    return (
      <View style={style.view_bg}>
          <View>
              <Image 
              style={style.logo}
              source={require('../assets/broom.png')}/>
          </View>
          <View style={style.input_view}>
              <TextInput placeholder="USERNAME"style={style.text_input} ></TextInput>
              <TextInput placeholder="PASSWORD" style={style.text_input} secureTextEntry={true}></TextInput>
          </View>
          <View >
              <View >
              <Button buttonStyle={{borderRadius:50,width:100,backgroundColor:'#F5C2C2',marginBottom:5}}  onPress={go_to_home} color='#F5C2C2' title='Login'></Button>        
              </View>
              <View >
              <Button buttonStyle={{borderRadius:50,width:100,backgroundColor:'#F5C2C2',}}  onPress={go_to_register} title='Register'></Button>
              </View>
          </View>
    
      </View>
    );
  }
  
  const style = StyleSheet.create({
      view_bg:{
          backgroundColor : "#61AC7F",
          flex:1 ,
          alignItems:'center',
          justifyContent:'center',
          width:'100%'
      },
      logo:{
          width :250,
          height:250,
          marginBottom:50
      },
      input_view:{
          width:'70%',
          flexDirection:'cloumn',
          marginBottom:20

      },
      text_input:{     
         height: 40, 
         backgroundColor : 'white',
         borderRadius : 30,
         width:'100%',
         paddingHorizontal: 10,
         marginVertical:7,
      },
      container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
    }

      
      
  })
  