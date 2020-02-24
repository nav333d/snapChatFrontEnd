import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Dimensions, Image, TouchableOpacity, ActivityIndicator,} from 'react-native';
import CompleteBox from './content/CompeleteCard';
import {APIs} from '../../../constants/services/api';
import VideoBox from './content/VideoBox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage'; 

const { width, height} = Dimensions.get('window')

const apiCall = new APIs()

class mainScreen extends Component {
    state={
        data : [],
        all_videos: []
    }

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

async componentDidMount(){
    //const res = await apiCall.getAllVideosOfSingleUSer({userId : "dsf3732rufbjbewf003prhf498r6cbjd"});
    const videos = await apiCall.getVideos();
    console.log(videos)
  
    var collection = videos["collection"];
   
    var locations = [];
   
    for(var i = 0; i < collection.length; i++){
        var video_links=collection[i]["videoLinks"];
        for(var j = 0; j < video_links.length; j++){
            if(video_links[j].location){
               locations.push({
                   location : video_links[j].location,
                   userName : collection[i].userName,
                   videoId : video_links[j]._id,
                   userId : video_links[j].userId,
               })
            }
        }
    }
    console.log(locations)
  
  
    locations = this.shuffle(locations);
  
   
    this.setState({
        // data : res.collection.videoLinks,
        all_videos: locations
    })
}

  registerVote = async(videoId, userId) =>{
      console.log(userId)
     const voterId = await AsyncStorage.getItem('user_Id')
    const {message, error, singleVideoCollection} = await apiCall.registerVote({voterId,userId, videoId })
    console.log(message, error)
    console.log(singleVideoCollection)
    
}


    render() {
        console.log("Main Screen render")
        return (
            <ScrollView style={styles.container}>  
                <FlatList
                data ={this.state.all_videos}
                renderItem={({item,i}) =>
                <View style={ styles.mainContainer}>
                <View style={{flex :1, marginTop : 5 }}>
                <View style={{flex : 1, marginHorizontal : width * 0.03, flexDirection : 'row',}}>
 
                    <View style={{ flex : 1,  borderRadius : 40, justifyContent : 'center', alignItems : 'center'}}>
                        <Image
                            style ={{width : width * 0.1856, height : height * 0.09, borderRadius : 70}}
                            source={require('../../../assets/blank.png')} 
                        />

                    </View>
                    
                    <View style={{flex : 4,  justifyContent : 'center'}}>
                        <View style={{ marginLeft : 10}}>
                        <Text style ={{fontSize : 18, color : 'black', fontWeight : '500'}}> {item.userName}  </Text>
                        </View>

                    </View>
                </View>            
            </View>
            <VideoBox
            uri = {item.location}
            />
             <TouchableOpacity onPress={() => this.registerVote(item.videoId, item.userId)}
             style={styles.VoterContainer}>
                <TouchableOpacity style={{margin : 10}}>
                    <Icon
                        name="vote" 
                        size ={30}
                        color = "white"
                    />
                
               </TouchableOpacity>

           
            </TouchableOpacity>
            </View>
                }
               keyExtractor={item => item.location}
                />
            
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
       
    },
    mainContainer:{
        flex : 1,
        borderBottomColor : 'grey',
        elevation : 0.8,
        marginBottom : 5
       
    },
    VoterContainer:{
        flex : 1,
        backgroundColor : '#0eadff',
        justifyContent : 'center',
        alignItems : 'center'
        // borderWidth : 2,
        // borderColor : 'green'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});

export default mainScreen

