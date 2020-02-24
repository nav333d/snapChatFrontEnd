import React,{Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

const {height, width} = Dimensions.get('window')

class Header extends Component{
    render(){
        console.log("header Box render")
        return (
            <View style={{flex :1, marginTop : 5 }}>
                <View style={{flex : 1, marginHorizontal : width * 0.03, flexDirection : 'row',}}>
 
                    <View style={{ flex : 1,  borderRadius : 40, justifyContent : 'center', alignItems : 'center'}}>
                        <Image
                            style ={{width : width * 0.1856, height : height * 0.09, borderRadius : 70}}
                            source={require('../../../../assets/blank.png')} 
                        />

                    </View>
                    
                    <View style={{flex : 4,  justifyContent : 'center'}}>
                        <View style={{ marginLeft : 10}}>
                        <Text style ={{fontSize : 18, color : 'black', fontWeight : '500'}}> {this.props.name}  </Text>
                        </View>

                    </View>
                </View>
               
               
            </View>
        )
    }
}

export default Header

