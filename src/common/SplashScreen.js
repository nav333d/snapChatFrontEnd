import React ,{Component} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'; 



class SplashScreen extends Component{
     static navigationOptions = {
        header : null
     }

  async componentDidMount(){

    setTimeout(async() =>{
        const userId = await AsyncStorage.getItem('user_Id')
        if(userId !== null){
            this.props.navigation.navigate('MainScreen')
        }
        else{
          this.props.navigation.navigate('Front')
        }

    }, 3000)
    
  }


    render(){
        return(
            <View style={{flex : 1, backgroundColor : 'yellow'}}>
            </View>
        )
    }
}

export default SplashScreen;