import { createSlice } from "@reduxjs/toolkit"
import * as SecureStore from 'expo-secure-store';



const appSlices = createSlice ({
    name:"app",
    initialState:{
    token : null,
    },
    reducers:{
        set_token: (state, action) => {
            state.token = action.payload
            SecureStore.setItemAsync('token', action.payload)
        },
        clear_token: (state, _) =>{
            SecureStore.deleteItemAsync('token')
            state.token = null
        }
    }
})


export const { set_token, clear_token } = appSlices.actions
export default appSlices.reducer