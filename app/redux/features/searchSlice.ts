import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface  SearchState {

  searchData : string

}

const initialState : SearchState = {
  
  searchData: ''

}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers : {
    setSearchData : (state, action: PayloadAction<string>) => {
        state.searchData = action.payload
    } 
  }
})


export const setSearchData = searchSlice.actions
export const searchReducer = searchSlice.reducer
// import { createSlice, PayloadAction, } from "@reduxjs/toolkit";


// interface SearchState {
//     searchData: string
// }

// const initialState: SearchState = {
//     searchData: '',
// }

// const searchSlice = createSlice({

//     name: 'search',
//     initialState,

//     reducers: {
//         setSearchData: (state, action: PayloadAction<string>) => {
//           state.searchData = action.payload;
//         },
//       },
// })

 
// export const setSearchData = searchSlice.actions
// export const searchReducer =   searchSlice.reducer
 