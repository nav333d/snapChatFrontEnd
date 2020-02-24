import React,{Component} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import {APIs} from '../../../../constants/services/api';
import AsyncStorage from '@react-native-community/async-storage';
import CompleteCard from '../content/CompeleteCard';


const apiCall = new APIs();

class HomeScreen extends Component{

    state={
        userName : '',
        videosData : [],
        isDataExists : false
    }

    async componentDidMount(){
        const userId = await AsyncStorage.getItem('user_Id')
        const userName = await AsyncStorage.getItem('user_name')
        console.log(userId)
        const res = await apiCall.getAllVideosOfSingleUSer({userId});
        console.log(res)

        if(res !== null){
            this.setState({ isDataExists : true})
            videosData = []
            for(let i =0; i< res.collection.videoLinks.length; i++){
                videosData.push({
                    location : res.collection.videoLinks[i].location,
                    id : res.collection.videoLinks[i]._id
                })
            }
            this.setState({videosData, userName})

        }
        else{
            this.setState({ isDataExists : false})

        }
        

      
       
    }
    render(){
        if(!this.state.isDataExists){
            show = 
                <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
                    <Text style={{fontSize : 16 , color : 'grey'}}> you have nothing posted yet</Text>
                </View>           
        }
        else{
            show =
            <ScrollView style={{flex : 1}}>
            <FlatList
            data={this.state.videosData}
            renderItem={({item,i}) =>

            <CompleteCard
                uri = {item.location}
                name = {this.state.userName}

            />
            
            }
            keyExtractor ={ item => item.id}

            />
        </ScrollView>

        }
        return (
         <ScrollView style={{flex : 1}}>
           
              {show}
            </ScrollView>
        )
    }
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})