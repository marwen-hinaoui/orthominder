import { createSlice } from "@reduxjs/toolkit"
import * as SecureStore from 'expo-secure-store';



const appSlices = createSlice ({
    name:"app",
    initialState:{
    user : null,
    loginLoading : false,
    },
    reducers:{
        set_storage: (state, action) => {
            state.user = action.payload
            SecureStore.setItemAsync('user', JSON.stringify(action.payload))
        },
        clear_storage: (state, _) =>{
            SecureStore.deleteItemAsync('user')
            state.user = null
        },
        set_login_loading: (state, action) =>{
            state.loginLoading = action.payload
        }
    }
})


export const { set_storage, clear_storage, set_login_loading } = appSlices.actions
export default appSlices.reducer