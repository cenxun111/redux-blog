import axios from 'axios'

export const postDataAPI = async(url,post) => {
    const res = await axios.post(`/api/${url}`,post)
    // ,{
    //     Headers:{Authorization:token}
    // })
    return res;
}

export const getDataAPI = async (url) => {
    const res = await axios.get(`/api/${url}`)
    // , {
    // //     headers: { Authorization: token}
    // })
    return res;
}