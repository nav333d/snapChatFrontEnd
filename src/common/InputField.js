import React,{Component} from 'react';
import {View, Text, StyleSheet, TextInput, Dimensions , ActivityIndicator} from 'react-native';
import TouchButton from './TouchButton';
import {connect} from 'react-redux';


const {height,width} = Dimensions.get('window');

class InputField extends Component{
    state={
        UserNameOrEmail : '',
      
    }
    render(){
        const {
            label,
            secureText,
            editable,
            value,
            onChangeText,
            maxLength
        } = this.props;
        return(
            <View style={{}}>
                <View style={{flexDirection: 'column', marginHorizontal :width * 0.07, marginBottom : 12 }}>
                    <Text style={{color : '#59b6da'}}>{label}</Text>
                       <TextInput
                        value={value}
                        maxLength = {maxLength}
                        onChangeText={onChangeText} 
                        editable = {editable}
                        secureTextEntry= {secureText}
                        //onChangeText = {(UserNameOrEmail) => this.setState({UserNameOrEmail})} 
                        style={{borderBottomWidth : 1, borderBottomColor : 'grey', lineHeight : 25, paddingBottom : -5,color : 'black', fontSize : 18}}
                    />
                    { this.props.is_loading ?
                    <View style={{ position : 'absolute', height : 50, width : 50, marginLeft : width * 0.56, marginTop : height * 0.05}}> 
                        <ActivityIndicator
                        size = "small"
                        style={{color : 'blue'}}

                        />
                    </View>
                   :null }
                </View>
                
               
            </View>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        is_loading : state.signupCredentials.is_loading
    }
}


export default connect(mapStateToProps)(InputField)
