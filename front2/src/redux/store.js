import {configureStore} from "@reduxjs/toolkit"
import adminreducer from "./adminRedux"


export const store = configureStore({
reducer:adminreducer
   
})