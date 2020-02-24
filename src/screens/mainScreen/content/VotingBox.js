import React,{Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


class VotingBox extends Component{
    render(){
        console.log("voting Box render")
        return (
            <TouchableOpacity style={styles.container}>
                <TouchableOpacity style={{margin : 10}}>
                    <Icon
                        name="vote" 
                        size ={30}
                        color = "white"
                    />
               </TouchableOpacity>
             </TouchableOpacity>
        )
    }
}

export default VotingBox

const styles = StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor : '#0eadff',
        justifyContent : 'center',
        alignItems : 'center'
        // borderWidth : 2,
        // borderColor : 'green'
    }
})