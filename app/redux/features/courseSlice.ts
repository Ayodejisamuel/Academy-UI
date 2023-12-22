import { createSlice, PayloadAction} from '@reduxjs/toolkit';


interface Course {

    id: number;
    title: string;
    author: string;
    cover_image: string;

}


interface CourseState {
    courses: Course[]
}


const initialState : CourseState = {
    courses : [],
}

const courseSlice = createSlice({

    name : "courses",
    initialState,

    reducers : {
        setCourses : (state, action: PayloadAction<Course[]>) => {
            state.courses = action.payload
        }
    }


 })


 export const {setCourses} = courseSlice.actions;

 export default courseSlice.reducer;