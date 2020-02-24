import React,{Component} from 'react';
import {View, Text, StyleSheet, Dimensions } from 'react-native';
import TouchButton from '../../common/TouchButton';
import {connect} from 'react-redux';


const {hieght, width } = Dimensions.get('window');

class FrontScreen extends Component{
    static navigationOptions = {
        header: null,
        };

    goToLogin = () =>{
       this.props.navigation.navigate('Login')
    }
    goToSignUp = () =>{
        this.props.navigation.navigate('SignUpScreen1')
    }
    render(){
        return(
            <View style={{ flex : 1,backgroundColor : '#fffc00'}}>
                <View style={{flex : 9 , justifyContent: 'center',alignItems: 'center' }}>
                    <Text>{this.props.signupCredentials.name}</Text>
                </View>
                <View style={{flex : 1,  padding : 15, flexDirection : 'row',  justifyContent : 'space-evenly', margin : 12 }}>
                   <View style={{marginRight : width * 0.01}}>
                    <TouchButton
                        onPress={this.goToLogin}
                        buttonText = " Login"
                        backgroundColor = "#ffffff"
                        textColor ="black" 
                    />
                    </View>
                    <View style={{marginLeft : width * 0.01}}>
                      <TouchButton
                        onPress = {this.goToSignUp}
                        buttonText = "SignUp"
                        backgroundColor = "#0eadff"
                        textColor ="white" 
                    />
                    </View>       
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        signupCredentials : state.signupCredentials
    }
}

export default connect(mapStateToProps)(FrontScreen)

