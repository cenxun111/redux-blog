import { createPost,getPosts,updateSuccess,postError,getUserPosts,updateStart} from "./postSlice"

import { postDataAPI,getDataAPI} from "./fetchData"


export const createNewsPost = async (post,dispatch) => {
    dispatch(updateStart())
 try{
     const res = await postDataAPI("createNewsPost",post);
    //  console.log(res)
     dispatch(createPost({
         post:res.data
     })),
     dispatch(updateSuccess())
     dispatch(updateStart())
 } catch (error) {
     dispatch(postError(error.message));
 }
};



export const allPost =()=> async(dispatch) => {
    try{
        const res = await getDataAPI("allPost");
        console.log(res)
        dispatch(getPosts({
            data:res.data
        }));
    }catch(error) {
        dispatch(postError(error.message))
    }
};

export const userPosts =({username})=> async(dispatch) => {
    try{
        const res = await getDataAPI(`user_posts/${username}`)
        console.log(username)
        console.log(res)
        dispatch(getUserPosts({
            data:res.data
        }));
    }catch(error) {
        dispatch(postError(error.message))
    }
};

