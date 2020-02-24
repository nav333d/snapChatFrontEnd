import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ActivityIndicator } from 'react-native';
import Video from 'react-native-video';
import  Icon  from 'react-native-vector-icons/FontAwesome';

const { height, width } = Dimensions.get('window')


class VideoBox extends Component {

    state={
        isLoading : true,
        error : '',
        coverBackground : 'white'
    }

    bufferConfig={
        minBufferMs: 100,
        maxBufferMs: 100,
        bufferForPlaybackMs: 100,
        bufferForPlaybackAfterRebufferMs: 100
      }

    readyForDisplay = async () =>{
        this.setState({
            isLoading : false
        })
    }
    handleError = () =>{
        this.setState({
            isLoading : false,
            error : "video cannot be load",
            coverBackground : '#000'
        })
    }

    onBuffer = (meta) => {
        console.log("ON BUFFEE", meta);
    }
    
    render() {
        const { isLoading, error, coverBackground } = this.state
        console.log("video Box render")
        return (
            <View style={styles.container}>
                <View style={{ width: width, height: height * 0.6, backgroundColor : coverBackground }}>
                    <View style={{width: width, height: height * 0.6, justifyContent : 'center', alignItems : 'center', position : 'absolute', left: 0, right : 0, top : 0, bottom :0}}>
                        { isLoading ? 
                            <ActivityIndicator size="small" /> : null
                        }

                        {
                            error !== '' ? 
                            <View style={{flexDirection : 'column', justifyContent : 'center', alignItems : 'center', flex : 1}}>
                                <Icon  name = "exclamation-triangle" size={80} color = 'red' /> 
                                <Text style={{color : 'white', fontSize : 20}}>{ error }</Text>
                            </View>
                            : null
                        }

                    </View>
                    <Video source={{ uri: this.props.uri }}   // Can be a URL or a local file.
                        ref={(ref) => {
                            this.player = ref
                        }}  
                        repeat
                        onReadyForDisplay={() =>this.readyForDisplay()}                                    // Store reference
                        onBuffer={this.onBuffer}                // Callback when remote video is buffering
                        onError={() => this.handleError()}               // Callback when video cannot be loaded
                        style={styles.backgroundVideo}
                        bufferConfig={this. bufferConfig}
                        selectedVideoTrack={{
                            type: "resolution",
                            value: 144
                          }} />

                </View>
            </View>
        )
    }
}

export default VideoBox

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        // borderColor : 'black',
        // borderWidth : 2
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
})