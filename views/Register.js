import React from 'react'
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import { Button } from 'react-native-elements';
import ValidationComponent from 'react-native-form-validator'
import axios from 'axios'

export default class ResumeForm extends ValidationComponent {
  state = {
    name: '',
    phonenumber:'',
    username: '',
    password: '',
    confirmpassword: '',
    address: '',
  }

  _onSubmit = () => {
    const isValid = this.validate({
      name: { required: true },
      phonenumber: { required: true ,numbers:true},
      username: { required: true },
      password: { required: true, numbers: true ,secureTextEntry:true},
      comfirmpassword: { required: true, numbers: true ,secureTextEntry:true},
      address: { required: true },
    });
    if(isValid){
      const formData = new FormData();
      formData.append('name',this.state.name)
      formData.append('phonenumber',this.state.phonenumber)
      formData.append('username',this.state.username)
      formData.append('password',this.state.password)
      formData.append('confirmpassword',this.state.confirmpassword)
      formData.append('address',this.state.address)
      const config = {
        headers: { 'content-type': 'multipart/form-data' }
      }
      axios.post(' ', formData, config)
        .then((res) => {
          Alert.alert(
            'Create success',
            'Click OK go to resume password',
            [{
              text: 'OK', onPress: () => {
                this.props.navigation.push('Register', { id: res.data.id })
              }
            }]
          )
        }).catch((error) => {
          console.log('error :', error)
        })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text >
          
        </Text>
        <View>
          <Text style={{ color: 'white' }}> Name :</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ name: text })}
            value={this.state.name}
          />
        </View>
        <View>
          <Text style={{ color: 'white' }} >Phonenumber :</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ phonenumber: text })}
            value={this.state.phonenumber}
          />
        </View>
        
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: 'white' }}>Username :</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ username: text })}
            value={this.state.username}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: 'white' }}>Password :</Text>
          <TextInput
            secureTextEntry={true} style={styles.default} value="abc"
            style={styles.textInput}
            onChangeText={text => this.setState({ password: text })}
            value={this.state.password}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: 'white' }} >Confirm Password :</Text>
          <TextInput 
            secureTextEntry={true} style={styles.default} value="abc"         
            style={styles.textInput}
            onChangeText={text => this.setState({ confirmpassword: text })}
            value={this.state.confirmpassword}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: 'white' }}>Address :</Text>
          <TextInput
            style={styles.textAreaInput}
            onChangeText={text => this.setState({ address: text })}
            value={this.state.address}
            multiline={true}
          />
        </View>
        <View style={{ marginTop: 20,alignItems: 'center',}}>
           <Button buttonStyle={{ borderRadius:50,width:200,backgroundColor:'#F5C2C2',marginBottom:5}}  onPress={this._onSubmit} color='#F5C2C2' title="Create Account"></Button> 
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { padding: 30, backgroundColor: "#61AC7F", minHeight: '100%' },
  textInput: { height: 40, 
    backgroundColor : 'white',
    borderRadius : 30,
    width:'100%',
    paddingHorizontal: 10,
    marginVertical:7, },
  textAreaInput: { marginTop:10,borderRadius : 30,backgroundColor : 'white',height: 100, borderColor: 'gray', borderWidth: 1 },
  errorMesspassword: { color: 'red', marginBottom: 20 },
  textwhite:{
    color: 'white'
  },
  
})