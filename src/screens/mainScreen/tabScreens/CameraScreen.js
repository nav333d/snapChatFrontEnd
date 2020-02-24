import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { RNCamera, } from 'react-native-camera';
import { APIs } from '../../../../constants/services/api';
import ProgressCircle from 'react-native-progress-circle';
import RNFS from 'react-native-fs';
import RNFetchBlob from 'react-native-fetch-blob';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';


const { height, width } = Dimensions.get('window')


const myapiCall = new APIs();

class CameraScreen extends Component {

    state={
        uploadingProgress : 0,
        disableRecording : false,
        color : '#0eadff',
        isUploading : false,
        cameraMood : 'back',
        timer : 6,
        isRecording : false
    }

    swipeCamera(){
        if(this.state.cameraMood === 'back'){
            this.setState({
                cameraMood : 'front'
            })
        }
        else{
            this.setState({
                cameraMood : 'back'
            })
        }
    }
    timer(){
        setInterval(() => {
            if(this.state.timer > 0){
                this.setState({ timer : this.state.timer -1})
            }
            else{
                this.setState({ isRecording : false})
                clearInterval();
            }
            
        }, 1000);
    }


    makeVideo = async () => {
        this.setState({ isRecording : true})
        this.timer();
    const userId = await AsyncStorage.getItem('user_Id')
    const userName = await AsyncStorage.getItem('user_name')
    console.log(userName)
     console.log(userId)
        if (this.camera) {
            const options = { quality: 0.5, base64: true, maxDuration: 5 }
            const data = await this.camera.recordAsync(options)
            //await myapiCall.sendVideo(data.uri)
            
            const splitedpath = data.uri.split('/')
            const videoFile = splitedpath[9]
             //var uploadUrl =   'https://testing1server.herokuapp.com/api/uploadVideo'
             
           var uploadUrl =   'http://192.168.1.104:5000/api/uploadVideo'
            const base64image = await RNFS.readFile(data.uri, 'base64');
            console.log("hit method1")
            RNFetchBlob.fetch('POST', uploadUrl, { 
                //  'Content-Type' : 'application/octet-stream',
                'Content-Type' : 'multipart/form-data', 
            }, [{name : 'file',filename : videoFile ,  data : base64image}, {name:"userID", data: userId}, {name:"username", data: userName}])
                .uploadProgress((written, total) =>{
                    console.log("hit method" + written, total);
                    this.setState({
                        disableRecording : true,
                        color : 'grey',
                        isUploading : true,
                        uploadingProgress  : Math.floor(written / total * 100)
                    })
                })
                .progress((received, total) =>{
                    console.log('progress', Math.floor(received / total * 100) +  '%')
                })
                .then((res) => {
                    this.setState({
                        disableRecording : false,
                        color : '#0eadff',
                        isUploading : false
                    })
                    console.log('.then' + res.text())
                })
                .catch((err) => {
                    console.log("hit method1 ex", err);
                })
      
        }


        
    }
    render() {
     
        if(this.state.cameraMood === 'back'){
            abc =
                <RNCamera
                ref={ref => {
                    this.camera = ref;
                }}
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.off}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}

            />      
             
        }
        else{
            abc =
            <RNCamera
            ref={ref => {
                this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.front}
            flashMode={RNCamera.Constants.FlashMode.off}
            androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
                title: 'Permission to use audio recording',
                message: 'We need your permission to use your audio',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
            }}

        />    
          
        }
            
        
        return (
            <View style={styles.container}>
                {abc}
               
                { this.state.isUploading ? 
                         <View style={{ marginTop: height / 2.4, position: 'absolute', left: 0, right: 0, top: 0, right: 0, justifyContent: 'center', alignItems: 'center' }}>
                         <ProgressCircle
                             percent={this.state.uploadingProgress}
                             radius={35}
                             borderWidth={5}
                             color="#3399FF"
                             shadowColor="#999"
                             bgColor="#fff"
                         >
                             <Text style={{ fontSize: 18 }}>{this.state.uploadingProgress + '%'}</Text>
                         </ProgressCircle>
                     </View>
                     : null

                }
                {
                    <TouchableOpacity 
                        onPress={() => this.swipeCamera()}
                    style={{ flex: 1, position: 'absolute',   alignSelf : 'flex-end',  }}>
                        <View style={{flex : 1, height : 100, width : 50, justifyContent : 'center', alignItems : 'center' }}>
                            <Icon
                            name = "flip-to-front"
                            size ={30}
                            color = "white"
                             />
                        </View>
                     </TouchableOpacity>

                }
           

                <View style={{ flex: 0, justifyContent: 'flex-end', position: 'relative' }}>
                    <TouchableOpacity 
                    disabled = { this.state.disableRecording}
                    onPress={this.makeVideo.bind(this)} 
                    style={{
                        flex: 0,
                        height: 70,
                        backgroundColor: this.state.color,
                        borderRadius: 700,
                        width: 70,
                        position: 'absolute',
                        paddingBottom: 50,
                        elevation: 0.9,
                       alignSelf: 'center',
                       justifyContent : 'center',
                       alignItems : 'center'

                    }}>
                        { this.state.isRecording ?
                            <View style={{flex : 1, justifyContent : 'center', alignItems : 'center', paddingTop : height * 0.06, paddingRight : 5}}>
                            <Text style ={{color : 'grey', fontSize : 18, fontWeight : '500'}}> { this.state.timer }</Text>
                            </View>
                            : null
                        }
                        
                    


                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

export default CameraScreen



const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'column',


    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});