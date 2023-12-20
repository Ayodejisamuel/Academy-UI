import { configureStore } from '@reduxjs/toolkit'
import courseSlice from './features/courseSlice'

const store = configureStore({
    reducer : {
            course: courseSlice
    }
})

export default store;