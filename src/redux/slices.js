import { createSlice } from "@reduxjs/toolkit"
import * as SecureStore from 'expo-secure-store';



const appSlices = createSlice ({
    name:"app",
    initialState:{
    user : null,
    loginLoading : false,
    current_aligner :
    {
        aligner_id:null,
        aligner_number:null,
        message:null,
    },
    },
    reducers:{
        set_storage: (state, action) => {
            state.user = action.payload
            SecureStore.setItem('user', JSON.stringify(action.payload))
        },
        clear_storage: (state, _) =>{
            SecureStore.deleteItemAsync('user')
            state.user = null
        },
        set_login_loading: (state, action) =>{
            state.loginLoading = action.payload
        },
        set_current_aligner: (state, action) =>{
            state.current_aligner = action.payload
        }
    }
})


export const { set_storage, clear_storage, set_login_loading, set_current_aligner} = appSlices.actions
export default appSlices.reducer