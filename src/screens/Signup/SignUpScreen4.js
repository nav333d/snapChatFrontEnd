import React, {Component } from 'react';
import {View, Text, Dimensions, Alert} from 'react-native';
import TouchButton from '../../common/TouchButton';
import InputField from '../../common/InputField';
import {updateUserName} from '../../../redux/actions';
import {connect} from 'react-redux';


const {height, width } = Dimensions.get('window')

class SignUpScreen4 extends Component{
    state={
        userName : ''
    }
    componentDidMount(){
        this.setState({
            userName : this.props.userName
        })
    }
   
    goToNextScreen = () =>{
     
        this.props.updateUserName(this.state.userName)
        this.props.navigation.navigate('SignUpScreen5')
    }
    render(){
        return(
            <View style={{flex : 1, backgroundColor : '#ffffff'}}>
                <View style={{flex: 0.5}}>
                    {/* here comes back button */}
                </View>

                <View style={{flex : 2, alignItems : 'center', justifyContent : 'flex-end'}}>
                    <Text style={{color: '#080808', fontWeight: '500', fontSize: 20}}> Pick a username </Text>
                </View>

                <View style={{flex : 1, alignItems : 'center',marginTop : height * 0.01, flexDirection :'column'}}>
                    <Text style={{color : 'grey',fontSize : 12, fontWeight : "300"}}> your username is how friend add you on snapchat </Text>
                   

                </View>

                <View style={{flex : 5,  }}>
                    <View style={{marginHorizontal : width * 0.1}}>
                    <InputField
                        label =" USERNAME" 
                        value = {this.state.userName}
                        onChangeText={(userName) => this.setState({userName})}
                    />
                    </View>
                </View>
                
                <View style={{flex : 1.5}}>
                    <View style={{marginHorizontal : width * 0.125}}>
                    <TouchButton
                        onChangeText={(userName) => this.setState({userName})}
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
    return{
        updateUserName : userName => dispatch(updateUserName(userName)) 
    }
}

const mapStateToProps = (state) =>{
    return{
        userName : state.signupCredentials.userName
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen4)