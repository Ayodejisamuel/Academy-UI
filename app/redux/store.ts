import { configureStore } from '@reduxjs/toolkit'
import  {searchReducer} from './features/searchSlice';
import {courseReducer} from './features/courseSlice';
 
const store = configureStore({
 reducer:  {
    search : searchReducer,
    course : courseReducer
 }
})

export default store;