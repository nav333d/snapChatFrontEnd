import React, {Component } from 'react';
import {View, Text, Dimensions, Alert} from 'react-native';
import TouchButton from '../../common/TouchButton';
import InputField from '../../common/InputField';
import {savePassword} from '../../../redux/actions';
import {connect} from 'react-redux';


const {height, width } = Dimensions.get('window')

class SignUpScreen5 extends Component{
    state={
        password : '',
        isPasswordgood: true
    }
    goToNextScreen = () =>{
        let password = this.state.password
        let passwordLength = password.length;
        if(passwordLength >= 8){
            this.props.savePassword(password)
            this.props.navigation.navigate('SignUpScreen6')  
        }
        else{
            this.setState({
               isPasswordgood: false
            })
        }
    }
    
    render(){
        return(
            <View style={{flex : 1, backgroundColor : '#ffffff'}}>
                <View style={{flex: 0.5, justifyContent : 'center', alignItems : 'center'}}>
                  
               
                </View>

                <View style={{flex : 2, alignItems : 'center', justifyContent : 'flex-end'}}>
                    <Text style={{color: '#080808', fontWeight: '500', fontSize: 20}}> Set a Password</Text>
                </View>

                <View style={{flex : 1, alignItems : 'center',marginTop : height * 0.01, flexDirection :'column'}}>
                    <Text style={{color : 'grey',fontSize : 12, fontWeight : "300"}}> your Password Should be atleas 8 charactors. </Text>
                   

                </View>

                <View style={{flex : 5,  }}>
                    <View style={{marginHorizontal : width * 0.1}}>
                    <InputField
                        label =" PASSWORD" 
                        value={this.state.password}
                        secureText ={true}
                        onChangeText = {(password) => this.setState({password})}
                        
                    />
                    </View>
                    { this.state.isPasswordgood ? null :
                        <View style={{flex : 1, borderColor : 'black', alignItems : 'center'}}>
                        <Text style={{color : 'red', fontSize : 12, }}>password should be atleast 8 characters</Text>
                    </View> 
                    
                    }
                   
                </View>
                
                <View style={{flex : 1.5,}}>
                    <View style={{marginHorizontal : width * 0.125, }}>
                    <TouchButton
                        onPress={this.goToNextScreen}
                        buttonText = "Continue"
                        backgroundColor ="#0eadff"
                        textColor ="white"
                        textSize= {18}
                  
                    />  
                    </View>
                </View>
             
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        savePassword : password => dispatch(savePassword(password))
    }
}

const mapStateToProps = (state) =>{
    return{
        signupCredentials : state.signupCredentials
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen5)