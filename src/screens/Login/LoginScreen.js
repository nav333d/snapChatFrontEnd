import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions , ActivityIndicator} from 'react-native';
import InputField from '../../common/InputField';
import TouchButton from '../../common/TouchButton';
import {APIs} from '../../../constants/services/api';
import AsyncStorage from '@react-native-community/async-storage'; 

const myAPIs = new APIs();

const {height, width} = Dimensions.get('window')

class LoginScreen extends Component {

    state={
        email : '',
        password : '',
        userName : '',
        errorMassage : '',
        is_loading : false
    }
      
      gotToNextScreen = async () => {
          this.setState({is_loading : true, errorMassage : ''})
          const mail = this.state.email;
          const password = this.state.password;
          const email = mail.trim();
        const{error, message,userId, userName} = await myAPIs.userLogin({email, password})
       

        setTimeout(async() =>{
            if(error === false){
                this.setState({is_loading : false})
                await AsyncStorage.setItem('user_Id', userId)
                await AsyncStorage.setItem('user_name', userName)
                this.props.navigation.navigate('MainScreen')
            }
            else{
                this.setState({is_loading : false})
                this.setState({
                    errorMassage : message
                })
                
            }
    

        }, 3000)
       


    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 3 }}>
                    <View style={{ flex: 4 }}>

                    </View>
                    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 25, fontWeight: '400', color: '#030303' }}> Log in</Text>
                    </View>

                </View>

                <View style={{ flex: 5, flexDirection: 'column',}}>
                    <InputField
                        label="Enter your EMAIL"
                        value ={this.state.email}
                        onChangeText = {(email) => this.setState({email})}
                    />
                    <InputField
                        label="Password"
                        secureText={true}
                        value ={this.state.password}
                        onChangeText = {(password) => this.setState({password})}

                    />
                    <View style={{ justifyContent : 'center', alignItems : 'center'}}>
                        {
                            this.state.errorMassage === '' ? this.state.is_loading === true ?
                            <ActivityIndicator
                                size = "small"
                            />
                            :  <Text style={{color : 'red', fontSize : 14, fontWeight : '400'}}> {this.state.errorMassage} </Text>
                            :  <Text style={{color : 'red', fontSize : 14, fontWeight : '400'}}> {this.state.errorMassage} </Text>

                        }
                           
                    </View>
                </View>

                <View style={{ flex: 2, margin : 10, justifyContent : 'flex-end' }}>
                    <View style={{marginHorizontal :  width * 0.09}}>
                        <TouchButton
                            onPress={this.gotToNextScreen}
                            textColor="#edf1f3"
                            buttonText=" Log in"
                            backgroundColor = { this.state.email !== '' ? this.state.password !== '' ? "#0eadff" : '#adb6bd' : '#adb6bd' }
                            
                        />
                    </View>

                </View>

            </View>
        )
    }
}



export default LoginScreen
