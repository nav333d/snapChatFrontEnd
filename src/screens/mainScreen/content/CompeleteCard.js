import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './Header';
import VideoBox from './VideoBox';
import VotingBox from './VotingBox';


class CompleteBox extends Component{

    render(){
        console.log("header Box render")
        return (
            <View style={styles.container}>
                <View style={{flex : 1}}>
                    <Header
                    name = {this.props.name} 
                    />
                </View>
                <View style={{flex : 5}}>
                    <VideoBox uri={this.props.uri}/>
                </View>
                <View style={{flex : 1}}>
                    <VotingBox />
                </View>

            </View>
        )
    }
}

export default CompleteBox

const styles = StyleSheet.create({
    container:{
        flex : 1,
        borderBottomColor : 'grey',
        elevation : 0.8,
        marginBottom : 5
       
    }
})