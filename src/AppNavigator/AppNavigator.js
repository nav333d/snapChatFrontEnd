import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator} from 'react-navigation';
import FrontScreen from '../screens/Login/FrontScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import SignUpScreen1 from '../screens/Signup/SignUpScreen1';
import SignUpScreen2 from '../screens/Signup/SignUpScreen2';
import SignUpScreen3 from '../screens/Signup/SignUpScreen3';
import SignUpScreen4 from '../screens/Signup/SignUpScreen4';
import SignUpScreen5 from '../screens/Signup/SignUpScreen5';
import SignUpScreen6 from '../screens/Signup/SignUpScreen6';
import SignUpScreen7 from '../screens/Signup/SignUpScreen7';
import MainScreen from '../screens/mainScreen/MainScreen';
import SplashScreen from '../common/SplashScreen';
import HomeScreen from '../screens/mainScreen/tabScreens/HomeScreen';
import CameraScreen from '../screens/mainScreen/tabScreens/CameraScreen';
import SettingScreen from '../screens/mainScreen/tabScreens/SettingScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import HomeIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'

// const SignUpScreens = createSwitchNavigator({
//     SignUpScreen1:{
//         screen : SignUpScreen1
//     },
//     SignUpScreen2:{
//         screen : SignUpScreen2
//     },
//     SignUpScreen3:{
//         screen : SignUpScreen3
//     },
//     SignUpScreen4:{
//         screen : SignUpScreen4
//     },
//     SignUpScreen5:{
//         screen : SignUpScreen5
//     },
//     SignUpScreen6:{
//         screen : SignUpScreen6
//     },
//     SignUpScreen7:{
//         screen : SignUpScreen7
//     }

    
    
// })

const tabNaviagtor = createBottomTabNavigator({
    MainScreen:{
        screen : MainScreen,
        navigationOptions:{
            header: null,
            tabBarLabel : 'Feed',
            headerVisible: false,
            tabBarIcon:({tintColor}) =>(
                <Icon
                name ="home"
                size={24} 
                color={tintColor}
                />
            )
        }       
    },
    camera :{
        screen : CameraScreen,
        navigationOptions:{
            tabBarLabel : 'Feed',
            tabBarIcon:({tintColor}) =>(
                <Icon
                name ="camera"
                size={24} 
                color={tintColor}
                />
            )
        } 
    },
    homeScreen :{
        screen : HomeScreen,
        navigationOptions:{
            tabBarLabel : 'account',
            tabBarIcon:({tintColor}) =>(
                <HomeIcon
                name ="account"
                size={24} 
                color={tintColor}
                />
            )
        } 
    },
  
    // settings :{
    //     screen : SettingScreen
    // }

},{
   
    navigationOptions :{
        tabBarVisible : true,
        
    },
    tabBarOptions :{
        activeTintColor : "#0eadff",
        inactiveTintColor : "#adb6bd"
    }
})

const Navigator = createStackNavigator({
    
    
    SplashScreen :{
        screen : SplashScreen
    },
   
    Front :{
        screen :  FrontScreen
    },
    Login:{
        screen : LoginScreen
    },
    SignUpScreen1:{
        screen : SignUpScreen1
    },
    // SignUpScreen2:{
    //     screen : SignUpScreen2
    // },
    SignUpScreen3:{
        screen : SignUpScreen3
    },
    SignUpScreen4:{
        screen : SignUpScreen4
    },
    SignUpScreen5:{
        screen : SignUpScreen5
    },
    SignUpScreen6:{
        screen : SignUpScreen6
    },
    SignUpScreen7:{
                screen : SignUpScreen7
    },
    MainScreen :{
        screen : tabNaviagtor,
        navigationOptions:{
            header: null,
        }
    },
    // MainScreen :{
    //     screen : MainScreen
    // }
    // SignUp:{
    //     screen : SignUpScreens
    // }
})

export default createAppContainer(Navigator)