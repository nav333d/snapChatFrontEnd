import React, {Component } from 'react';
import {View, Text, Dimensions} from 'react-native';
import TouchButton from '../../common/TouchButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {connect} from 'react-redux';


const {height, width } = Dimensions.get('window')

class SignUpScreen3 extends Component{
    goToNextScreen = () =>{
        this.props.navigation.navigate('SignUpScreen5')
    }
    render(){
        return(
            <View style={{flex : 1, backgroundColor : '#ffffff'}}>
                <View style={{flex: 0.5}}>
                    {/* here comes back button */}
                </View>

                <View style={{flex : 2, alignItems : 'center', justifyContent : 'flex-end'}}>
                    <Text style={{color: '#080808', fontWeight: '500', fontSize: 20}}> Your username </Text>
                </View>

                <View style={{flex : 4, alignItems : 'center',marginTop : height * 0.05, flexDirection :'column'}}>
                    <Text style={{color : '#101010',fontSize : 18, fontWeight : "300"}}>{this.props.signupCredentials.userName}</Text>
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('SignUpScreen4')} style={{margin : 8}}>
                        <Text style={{color : '#0eadff'}}>Chnage my Username</Text>
                    </TouchableOpacity>

                </View>

                <View style={{flex : 2, }}>
                </View>
                
                <View style={{flex : 1.5}}>
                    <View style={{marginHorizontal : width * 0.125}}>
                    <TouchButton
                        onPress ={this.goToNextScreen}
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

const mapStateToProps = (state) =>{
    return{
        signupCredentials : state.signupCredentials
    }
}

export default connect(mapStateToProps)(SignUpScreen3)