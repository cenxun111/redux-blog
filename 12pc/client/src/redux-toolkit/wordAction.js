
import { createWord,getUserWords,wordError,updateStart,updateSuccess} from './wordSlice'

import { postDataAPI,getDataAPI} from "./fetchData"

export const createNewWord = async (word,dispatch) => {
    dispatch(updateStart())
    try{
        const res = await postDataAPI("createNewWord",word);
        dispatch(createWord({
            word:res.data
        })),
        dispatch(updateSuccess())
    //  dispatch(updateStart())
    } catch (error) {
        dispatch(wordError(error.message))
    }
};

export const userWords =({username}) => async (dispatch) => {
    try{
        const res = await getDataAPI(`user_words/${username}`)
        console.log(username)
        console.log(res)
        dispatch(getUserWords({
            data:res.data
        }));
    } catch (error) {
        dispatch(wordError(error.message))
    }
};