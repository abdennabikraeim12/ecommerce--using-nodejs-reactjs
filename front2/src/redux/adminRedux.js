import {createSlice} from "@reduxjs/toolkit"


const adminSlice = createSlice({
    name:"admin",
    initialState:{
        currentUser:null,//save de doonee
        error:false ,//
        isFetching:false//relodiiii oui ou nn
    },
reducers:{
    loginsuccess:(state,action) =>{
        state.currentUser = action.payload
        state.isFetching = false
        state.error = false
    },
    loginError: (state) => {
        state.currentUser = null
        state.isFetching = false
        state.error = true
    },
    loginStart: (state) => {
        state.currentUser = null
        state.isFetching = true
        state.error = false
    },
    signOut: (state) => {
        state.currentUser = null
        state.isFetching = false
        state.error = false
    }

}
 
})
export const {loginsuccess,loginError,loginStart,signOut} = adminSlice.actions

export default adminSlice.reducer