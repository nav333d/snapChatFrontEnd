import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import TouchButton from '../../common/TouchButton';
import InputField from '../../common/InputField';
import {connect} from 'react-redux';
//import MyPicker from '../../common/MyPicker';

import Picker from 'react-native-picker-view';


const { height, width } = Dimensions.get('window')

class SignUpScreen2 extends Component {
    state = {
        selectedItem: 0,
        monthIndex : 0,
        dayIndex : 0,
        yearIndex : 51,
        /////////////
        dayValue : '1',
        monthValue : 'January',
        yearValue : '2000',
        dayValues : [ 
            "1", "2", "3", "4", "5", "6", "7", "8","9", "10",
            "11", "12", "13", "14", "15", "16", "17", "18","19", "20",
           "21", "22", "23", "24", "25", "26", "27", "28","29", "30", "31"
        ]
    }

    goToNextScreen = () =>{
        this.props.navigation.navigate('SignUpScreen3')
    }
    

    onItemSelected = selectedItem => {
        this.setState({ selectedItem })
    }

    onPress = () => {
        this.setState({ selectedItem: 3 })
    }
  async  checkDateWithRespectToMonth(index, value){
      this.setState({monthValue: value})
        
            if(index === 0){
                dayValue = [ 
                         "1", "2", "3", "4", "5", "6", "7", "8","9", "10",
                         "11", "12", "13", "14", "15", "16", "17", "18","19", "20",
                        "21", "22", "23", "24", "25", "26", "27", "28","29", "30", "31"
                     ]
                     this.setState({
                         dayValues :dayValue,
                         monthIndex : index
                  })                
            }
            else if(index === 1){
                dayValue = [ 
                    "1", "2", "3", "4", "5", "6", "7", "8","9", "10",
                    "11", "12", "13", "14", "15", "16", "17", "18","19", "20",
                   "21", "22", "23", "24", "25", "26", "27", "28", " "," "," ", 
                ]
                this.setState({
                    dayValues :dayValue,
                    monthIndex : index
             })

            }
            else if (index === 2){
                dayValue = [ 
                    "1", "2", "3", "4", "5", "6", "7", "8","9", "10",
                    "11", "12", "13", "14", "15", "16", "17", "18","19", "20",
                   "21", "22", "23", "24", "25", "26", "27", "28","29", "30", "31"
                ]
               await this.setState({
                    dayValues :dayValue,
                    monthIndex : index
             })
            }
            else if(index ===3){
                dayValue = [ 
                    "1", "2", "3", "4", "5", "6", "7", "8","9", "10",
                    "11", "12", "13", "14", "15", "16", "17", "18","19", "20",
                   "21", "22", "23", "24", "25", "26", "27", "28","29", "30", ," "
                ]
                this.setState({
                    dayValues :dayValue,
                    monthIndex : index
             })
            }
            else if(index ===4){
                dayValue = [ 
                    "1", "2", "3", "4", "5", "6", "7", "8","9", "10",
                    "11", "12", "13", "14", "15", "16", "17", "18","19", "20",
                   "21", "22", "23", "24", "25", "26", "27", "28","29", "30", "31"
                ]
                this.setState({
                    dayValues :dayValue,
                    monthIndex : index
             })
            }
            else if(index ===5){
                dayValue = [ 
                    "1", "2", "3", "4", "5", "6", "7", "8","9", "10",
                    "11", "12", "13", "14", "15", "16", "17", "18","19", "20",
                   "21", "22", "23", "24", "25", "26", "27", "28","29", "30"," "
                ]
                this.setState({
                    dayValues :dayValue,
                    monthIndex : index
             })
            }
            else if(index ===6){
                dayValue = [ 
                    "1", "2", "3", "4", "5", "6", "7", "8","9", "10",
                    "11", "12", "13", "14", "15", "16", "17", "18","19", "20",
                   "21", "22", "23", "24", "25", "26", "27", "28","29", "30", "31"
                ]
                this.setState({
                    dayValues :dayValue,
                    monthIndex : index
                    
             })
            }
            else if(index ===7){
                dayValue = [ 
                    "1", "2", "3", "4", "5", "6", "7", "8","9", "10",
                    "11", "12", "13", "14", "15", "16", "17", "18","19", "20",
                   "21", "22", "23", "24", "25", "26", "27", "28","29", "30", "31"
                ]
                this.setState({
                    dayValues :dayValue,
                    monthIndex : index
             })
            }
            else if(index ===8){
                dayValue = [ 
                    "1", "2", "3", "4", "5", "6", "7", "8","9", "10",
                    "11", "12", "13", "14", "15", "16", "17", "18","19", "20",
                   "21", "22", "23", "24", "25", "26", "27", "28","29", "30"," "
                ]
                this.setState({
                    dayValues :dayValue,
                    monthIndex : index
             })
            }
            else if(index ===9){
                dayValue = [ 
                    "1", "2", "3", "4", "5", "6", "7", "8","9", "10",
                    "11", "12", "13", "14", "15", "16", "17", "18","19", "20",
                   "21", "22", "23", "24", "25", "26", "27", "28","29", "30", ,"31"
                ]
                this.setState({
                    dayValues :dayValue,
                    monthIndex : index
             })
            }
            else if(index ===10){
                dayValue = [ 
                    "1", "2", "3", "4", "5", "6", "7", "8","9", "10",
                    "11", "12", "13", "14", "15", "16", "17", "18","19", "20",
                   "21", "22", "23", "24", "25", "26", "27", "28","29", "30"," "
                ]
                this.setState({
                    dayValues :dayValue,
                    monthIndex : index
             })
            }
            else if(index ===11){
                dayValue = [ 
                    "1", "2", "3", "4", "5", "6", "7", "8","9", "10",
                    "11", "12", "13", "14", "15", "16", "17", "18","19", "20",
                   "21", "22", "23", "24", "25", "26", "27", "28","29", "30", "31"
                ]
                this.setState({
                    dayValues :dayValue,
                    monthIndex : index
             })
            }
        
        
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <View style={{ flex: 0.7, position: 'relative',justifyContent : 'center', alignItems : 'center'}}>
               
                </View>

                <View style={{ flex: 1.5, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: height * 0.02, }}>
                    <Text style={{ color: '#080808', fontWeight: '500', fontSize: 20 }}>What's your birthday?</Text>
                </View>

                <View style={{ flex: 2, }}>
                    <View style={{ flex: 1, flexDirection: 'column', }}>
                        <InputField
                            label="BIRTHDAY"
                            editable={false}
                            value={this.state.monthValue + "," + this.state.dayValue +" "+ this.state.yearValue}
                        />

                    </View>
                </View>
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ marginHorizontal: width * 0.03, }}>
                        <TouchButton
                            onPress ={this.goToNextScreen}
                            textColor="#f9fcfd"
                            buttonText="Continue"
                            backgroundColor={this.state.dayValue === '' ?"#adb6bd" : '#0eadff'}
                            textSize={18}
                            textWeight="500"
                        />
                    </View>

                </View>

                <View style={{ flex: 3,  margin: height * 0.02, flexDirection: 'row',  justifyContent : 'center', alignItems: 'center' }}>                  
                        <View style={{marginHorizontal : 5 , borderColor : 'white', borderWidth : 2}}>
                            <Picker
                                values={["January", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]}            
                                selected={this.state.monthIndex}
                                style={{ width: width * 0.2, height: height * 0.2}}
                                enableInput={false}
                                onSelect={(value, index) => {
                                    this.checkDateWithRespectToMonth(index, value)
                                }}
                            />
                        </View>
                     <View style={{marginHorizontal : 5 , borderColor : 'white', borderWidth : 2}}>
                            <Picker
                             
                                values = {this.state.dayValues}
                                selected={this.state.dayIndex}
                                style={{ width: width * 0.2, height: height * 0.2 }}
                                enableInput={false}
                                onSelect={(value, index) => {
                                    this.setState({
                                        dayIndex : index,
                                        dayValue : value
                                    })
                                }}
                            />
                        </View>
                        <View style={{marginHorizontal : 5 , borderColor : 'white', borderWidth : 2}}>
                            <Picker
                                values={["1950", "1951", "1952", "1953", "1954", "1955","1956", "1957", "1958", "1959", "1960", "1961",
                                            "1962", "1963","1964", "1965","1966", "1967","1968", "1969","1970", "1971","1972", "1973",
                                            "1974", "1975","1976", "1977","1978", "1979","1980", "1981","1982", "1983", "1984", "1985",
                                            "1986", "1987", "1988", "1989", "1990", "1991","1992", "1993","1994", "1995", "1996", 
                                            "1997", "1998","1999", "2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010",
                                            "2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"                                        
                            ]}
                                selected={this.state.yearIndex}
                                style={{ width:width * 0.2, height: height * 0.2 }}
                                enableInput={false}
                                onSelect={(value, index) => {
                                    this.setState({yearIndex : index, yearValue : value})
                                }}
                            />
                        </View> 

                    </View>


                </View>
          
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        signupCredentials : state.signupCredentials
    }
}

export default  connect(mapStateToProps)(SignUpScreen2)