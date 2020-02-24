import {
    ADD_NAMES,
    ADD_PASSWORD,
    ADD_EMAIL_AND_OTP,
    UPDATE_USERNAME,
    IS_LOADING
} from '../actions/actionTypes';
import { Alert } from 'react-native';


const INITIALSTATE= {
    firstName : '',
    lasName : '',
    userName : '',
    password : '',
    email : '',
    OTP : '',
    is_loading : false

}

const signupCredentials = (state =INITIALSTATE,action) =>{
    switch (action.type) {
        case ADD_NAMES:
            return{...state, firstName : action.payload.firstName, lastName : action.payload.lastName, userName: action.payload.userName}

        case ADD_PASSWORD:
            return {...state, password : action.payload }       

        case ADD_EMAIL_AND_OTP:
            return {...state, email : action.payload.email , OTP : action.payload.OTP}   
            
        case UPDATE_USERNAME:
         
            return {...state, userName : action.payload} 

        case IS_LOADING:
            return {...state, is_loading : action.payload}    
    
        default:
            return state;
    }
}

export default signupCredentials