import { createSlice, PayloadAction } from '@reduxjs/toolkit';

    //interface of api data

interface Course {

    id: number;
    title: string;
    author: string;
    cover_image: string;

}


interface CourseState {

    courses: Course[],
 
    searchData: string

}


const initialState: CourseState = {
    courses: [],
    searchData: ""
}


const courseSlice = createSlice({

    name: "courses",
    initialState,

    reducers: {

        setCourses: (state, action: PayloadAction<Course[]>) => {

            state.courses = action.payload
         
            state.searchData = ''

        },

        

       
    }
})

export const { setCourses} = courseSlice.actions;

export const courseReducer = courseSlice.reducer;