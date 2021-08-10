import { createSlice } from '@reduxjs/toolkit'

const initialState={
    allposts:[],
    post:[],
    userPosts:[]
};

export const postSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        createPost:(state,action) => {
            state.post = action.payload;
        },
        updateSuccess:(state) => {
            state.updated = true;
        },
        updateStart:(state) => {
            state.updated = false;
        },
        getPosts:(state,action) =>{
            state.allposts = action.payload.data;
        },
        getUserPosts:(state,action) =>{
            state.userPosts = action.payload.data;
        },
        postError:(state,action) =>{
            state.error = action.payload;
        }
    },


})



export const {createPost,getPosts,updateSuccess,updateStart,getUserPosts,postError} = postSlice.actions 

export default postSlice.reducer