import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    word:[],
    userWords:[]
};

export const wordSlice = createSlice({
    name:"words",
    initialState,
    reducers:{
        createWord:(state,action) => {
            state.word = action.payload;
        },
        updateSuccess:(state) => {
            state.updated = true;
        },
        updateStart:(state) => {
            state.updated = false;
        },
        getUserWords:(state,action) =>{
            state.userWords = action.payload.data;
        },
        wordError:(state,action) =>{
            state.error = action.payload;
        }
    }
})


export const {createWord,getUserWords,wordError,updateStart,updateSuccess} = wordSlice.actions

export default wordSlice.reducer