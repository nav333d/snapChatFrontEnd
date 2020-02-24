import React, {Component } from 'react';
import {View, Text, Dimensions, Button , Alert} from 'react-native';
import TouchButton from '../../common/TouchButton';
import InputField from '../../common/InputField';
import {connect} from 'react-redux';
import {saveNames} from '../../../redux/actions';

const {height, width } = Dimensions.get('window')

class SignUpScreen1 extends Component{
    state ={
        firstName : '',
        lastName : '',
        messageMessage : ''
    }

    goToNextScreen = () =>{
        const {firstName, lastName} = this.state;
        if(firstName !== '' && lastName !== ''){
           
            var a = [firstName,  "ab", "ba", "01", "98", "cd", firstName, "ba", "01", "98", lastName,];
            var b = [lastName, "0", "1", "dfe", "xyz", lastName, "a", "fr", "kh", "tro", "lk", lastName ];
            var rA = Math.floor(Math.random()*a.length);
            var rB = Math.floor(Math.random()*b.length);
            var userName = a[rA] + b[rB];
            const names ={
                firstName: firstName,
                lastName : lastName,
                userName : userName
            }
            this.props.saveNames(names)
            this.props.navigation.navigate('SignUpScreen3')

        }
        else{
            this.setState({
                errorMessage: "Both fields are required"
            })
        }
    
    }

    render(){
        return(
            <View style={{flex : 1, backgroundColor : '#ffffff'}}>
              

                <View style={{flex : 1.5,  justifyContent : 'flex-end', alignItems : 'center',paddingBottom: height * 0.02}}>
                    <Text style={{color: '#080808', fontWeight: '500', fontSize: 20}}>What's your Name?</Text>
                </View>

                <View style={{flex : 4, }}>
                    <View style={{flex : 1, flexDirection: 'column',}}>
                        <InputField
                        label="FIRST NAME"
                        onChangeText={(firstName) => this.setState({firstName})}
                        value ={this.state.firstName}  
                        />
                        <InputField
                        label="LAST NAME" 
                        value={this.state.lastName}
                        onChangeText={(lastName) => this.setState({lastName})}
                        />
                    </View>
                    
                </View>
                

                <View style={{flex :  2,  justifyContent : 'flex-end', margin : height * 0.02}}>
                    <View style={{marginHorizontal : width * 0.07}}>
                    <TouchButton
                        onPress={this.goToNextScreen}
                        textColor = "#f9fcfd" 
                        buttonText = "Sign Up & Accept"
                        backgroundColor = {this.state.firstName === '' ?"#adb6bd" : "#0eadff"}
                        textSize = {18}
                        textWeight = "500"
                    />
                    </View>
                   
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{ 
    return{
        saveNames : names => dispatch(saveNames(names))

    }
}

export default connect(null, mapDispatchToProps)(SignUpScreen1)