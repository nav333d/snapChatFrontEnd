import React,{Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

class TouchButton extends Component{
    render(){
        const {
            buttonText,
            backgroundColor,
            textColor,
            textSize,
            textWeight,
            onPress,
            disabled
        } = this.props
        return(
            <View>
                <TouchableOpacity 
                disabled ={disabled}
                onPress={() => onPress()}>
                    <View style={{justifyContent: 'center', alignItems : 'center', paddingTop : width * 0.03,paddingBottom : width * 0.03,paddingRight: width * 0.125, paddingLeft : width * 0.125, backgroundColor : disabled === true ? '#adb6bd' : backgroundColor, borderRadius : width * 0.065}}>
                        <Text style={{color : textColor, fontSize : textSize, fontWeight : textWeight}}>{buttonText}</Text> 
                        
                    </View>
                    
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    
})

export default TouchButton
