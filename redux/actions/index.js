import {
    ADD_NAMES,
    ADD_PASSWORD,
    ADD_EMAIL_AND_OTP,
    UPDATE_USERNAME,
    IS_LOADING,
} from './actionTypes';

export const saveNames = (names) =>({
    type : ADD_NAMES,
    payload : names
})

export const savePassword = (password) =>({
    type : ADD_PASSWORD,
    payload : password
})

export const saveEmailAndOTP = (emailAndOTP) =>({
    type : ADD_EMAIL_AND_OTP,
    payload : emailAndOTP
})

export const updateUserName = (userName) =>({
   
    type : UPDATE_USERNAME,
    payload : userName
})

export const updateIndicator = (isLoading) =>({
    type : IS_LOADING,
    payload : isLoading
})