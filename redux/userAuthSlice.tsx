import {createSlice} from '@reduxjs/toolkit';

export const handleUserState=createSlice({
    name:'user',
    initialState:{
        value:false
    },
    reducers:{
        signInUpdate: state=>{
            state.value = true;
        },
        logOutUpdate: state=>{
            state.value = false;
        }
    }
})

export const {signInUpdate, logOutUpdate} =handleUserState.actions;
export default handleUserState.reducer;