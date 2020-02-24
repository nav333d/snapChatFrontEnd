import React, { Component } from 'react';
import { View, Text, Dimensions, Alert, } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import TouchButton from '../../common/TouchButton';
import InputField from '../../common/InputField';
import { connect } from 'react-redux';
import { saveEmailAndOTP, updateIndicator } from '../../../redux/actions';
import { APIs } from '../../../constants/services/api';
import { IS_LOADING } from '../../../redux/actions/actionTypes';


const { height, width } = Dimensions.get('window')

const myAPIs = new APIs()

class SignUpScreen6 extends Component {
    static defaultProps = {
        myAPIs
    };


    state = {
        email: '',
        errorMessage: '',
        OTP: '',
        buttonDisable: false
    }
    goToNextScreen = async () => {
         this.setState({buttonDisable : true})
         this.props.updateIndicator(true) 

         const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         const mail = this.state.email
         const email = mail.trim();
     
         var result = regex.test(email)

         
         setTimeout(async () => {
            if(result === true){
               
                const {error, message} = await this.props.myAPIs.matchEmailId({email})  
                console.log(error, message)
                    if(error === false){
                        const OTP =  Math.floor(1000 + Math.random() * 9000).toString();
                        await AsyncStorage.setItem('OTP', OTP)
                        const emailAndOTP = {
                                     email : email,
                                     OTP
                                }
                        this.props.saveEmailAndOTP(emailAndOTP)
                        const {error , message} = await this.props.myAPIs.sendMail({ email, OTP })
                       // console.log(error, message)
                        this.setState({buttonDisable : false})
                        this.props.updateIndicator(false)
                        this.props.navigation.navigate('SignUpScreen7')
                         
                    }
                    else{
                        this.setState({
                            errorMessage : message
                        })
                        this.props.updateIndicator(false)
                        this.setState({buttonDisable : false})
                    }           

            }
            else{
                this.setState({
                        errorMessage : 'Please enter correct Email'
                    })
                    this.props.updateIndicator(false)
                    this.setState({buttonDisable : false})

            }

         },3000)
    

    }

  

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
               
                </View>

                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Text style={{ color: '#080808', fontWeight: '500', fontSize: 20 }}>What's your email address?</Text>
                </View>

                <View style={{ flex: 1, alignItems: 'center', marginTop: height * 0.01, flexDirection: 'column' }}>
                    <Text style={{ color: 'grey', fontSize: 12, fontWeight: "300" }}> we will send you a verification code. </Text>


                </View>

                <View style={{ flex: 5, }}>
                    <View style={{ marginHorizontal: width * 0.1 }}>
                        <InputField
                            label=" EMAIL"
                            value={this.state.email}
                            onChangeText={(email) => {
                                this.setState({ email })
                                if (this.state.email === '') {
                                    this.setState({
                                        errorMessage: ''
                                    })
                                }
                            }}

                        />
                    </View>
                    {this.state.errorMessage !== '' ? this.state.email !== '' ?
                        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                            <Text style={{ color: 'red', fontSize: 12 }}>{this.state.errorMessage}</Text>
                        </View> : null : null
                    }
                </View>

                <View style={{ flex: 1.5 }}>
                    <View style={{ marginHorizontal: width * 0.125 }}>
                        <TouchButton
                            onPress={this.goToNextScreen}
                            buttonText="Continue"
                            backgroundColor="#0eadff"
                            textColor="white"
                            textSize={18}
                            disabled={this.state.buttonDisable}
                        />
                    </View>
                </View>

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        signupCredentials: state.signupCredentials
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveEmailAndOTP: emailAndOTP => dispatch(saveEmailAndOTP(emailAndOTP)),
        updateIndicator: is_loading => dispatch(updateIndicator(is_loading))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen6)