import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions , TextInput, ActivityIndicator} from 'react-native';
import TouchButton from '../../common/TouchButton';
import AsyncStorage from '@react-native-community/async-storage'; 
import {APIs} from '../../../constants/services/api';
import {connect} from 'react-redux';

const { width, height } = Dimensions.get('window');

const myAPIs = new APIs();

class SignUpScreen7 extends Component {
    state = {
        firstDidgit: '',
        secondDigit : '',
        thirdDigit : '',
        fourthDigit : '',
        OTP : '',
        errorMessage : '',
        
        is_loading : false,
        buttonDisable : false

    }
   async componentDidMount(){
        const OTP = await AsyncStorage.getItem('OTP')
        this.setState({OTP})
    }

    matchOTPs = async () => {
        this.setState({is_loading : true, buttonDisable : true})
        const {firstDidgit, secondDigit, thirdDigit , fourthDigit, OTP} = this.state;
       const userCode = firstDidgit.concat(secondDigit,thirdDigit,fourthDigit)
      const {firstName,lastName,userName,email,password} = this.props.signupCredentials

     setTimeout(async() =>{
        if(userCode === OTP){
            const response = await myAPIs.registerUser({firstName,lastName,userName,email,password})
          
            await AsyncStorage.setItem('user_Id', response.user._id)
            await AsyncStorage.setItem('user_name', response.user.userName)
           
         
            
            
            
            this.setState({is_loading : false, buttonDisable : false})
            this.props.navigation.navigate('MainScreen')
    
           }
           else{
                this.setState({is_loading : false, buttonDisable : false})
                this.setState({errorMessage : 'you have entered awrong password'})
           }

     }, 3000)
    
       
     
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', }}>
                    <Text style={{ color: '#080808', fontWeight: '500', fontSize: 20 }}> Enter Confirmation Code</Text>
                </View>

                <View style={{ flex: 1, alignItems: 'center', }}>
                    <Text style={{ color: 'grey', fontSize: 12, fontWeight: '300' }}> Enter the code we send to your Email</Text>
                </View>


                <View style={{ flex: 2,  }}>
                    <View style={{ flex: 1, flexDirection: 'row' , justifyContent : 'center', alignItems : 'center'  }}>
                        <View style={{margin : 5}}>   
                            <TextInput
                            maxLength ={1}
                            style={{borderBottomWidth : 2, borderBottomColor : 'grey', fontSize : 22, paddingBottom : -10 }} 
                            value={this.state.firstDidgit}
                            onChangeText ={(firstDidgit) => { this.setState({firstDidgit})
                                if (firstDidgit) this.refs.input_2.focus();
                            }}
                            
                            />
                        </View>    
                        <View style={{margin : 5}}>   
                            <TextInput
                           ref="input_2"
                            maxLength ={1}
                            style={{borderBottomWidth : 2, borderBottomColor : 'grey', fontSize : 22, paddingBottom : -10 }} 
                            value={this.state.secondDigit}
                            onChangeText ={(secondDigit) => { this.setState({secondDigit})
                                if (secondDigit){
                                    this.refs.input_3.focus();
                                }
                            }}
                            />
                        </View> 
                        <View style={{margin : 5}}>   
                            <TextInput
                            ref="input_3"
                            maxLength ={1}
                            style={{borderBottomWidth : 2, borderBottomColor : 'grey', fontSize : 22, paddingBottom : -10 }} 
                            value={this.state.thirdDigit}
                            onChangeText ={(thirdDigit) => { this.setState({thirdDigit})
                                if (thirdDigit){
                                    this.refs.input_4.focus();
                                }
 
                            }}
                           />
                        </View> 
                        <View style={{margin : 5}}>   
                            <TextInput
                              ref="input_4"
                            maxLength ={1}
                            style={{borderBottomWidth : 2, borderBottomColor : 'grey', fontSize : 22, paddingBottom : -10 }} 
                            value={this.state.fourthDigit}
                            onChangeText ={(fourthDigit) => { this.setState({fourthDigit})
                            
                               
                            }}
                           />
                        </View> 

                    </View>
                    
                        <View style={{ alignItems : 'center'}}>
                            { this.state.errorMessage === '' ? this.state.is_loading === true ?
                                <ActivityIndicator 
                                    size = "small"
                                />
                                : <Text style={{color : 'red', fontSize : 14, fontWeight : '400'}}>{this.state.errorMessage} </Text>
                                : <Text style={{color : 'red', fontSize : 14, fontWeight : '400'}}>{this.state.errorMessage} </Text>

                            }
                              
                         </View>
                    
                    

                </View> 

                <View style={{ flex: 5, justifyContent: 'flex-end', }}>


                  
                    <View style={{ margin: width * 0.125 }}>

                        <TouchButton
                            buttonText="Submit"
                            backgroundColor="#0eadff"
                            textColor="white"
                            textSize={22}
                            textWeight="400"
                            disabled= {this.state.buttonDisable}
                            onPress={() => this.matchOTPs()}
                        />
                    </View>

                </View>



            </View>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        signupCredentials :state.signupCredentials
    }
}

export default connect(mapStateToProps)(SignUpScreen7)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})