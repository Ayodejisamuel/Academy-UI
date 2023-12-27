import { createSlice, PayloadAction} from '@reduxjs/toolkit';


interface Course {

    id: number;
    title: string;
    author: string;
    cover_image: string;

}


interface CourseState {
    courses: Course[],
    loading: boolean,
    error : string | null
    
 
}


const initialState : CourseState = {
    courses : [],
    loading: false,
    error : null
 
}

const courseSlice = createSlice({

    name : "courses",
    initialState,

    reducers : {
      
        setCourses : (state, action: PayloadAction<Course[]>) => {
            state.courses = action.payload
            state.loading = false
            state.error = null
          
        },

        setLoading : (state, action) => {
            state.loading = action.payload
        },

        setError : (state, action) => {
            state.error = action.payload
            state.loading = false
        }

        
 
    }


 })


 export const {setCourses, setLoading, setError} = courseSlice.actions;

 export default courseSlice.reducer;