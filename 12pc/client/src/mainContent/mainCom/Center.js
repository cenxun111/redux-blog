import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import rightpic from '../../images/rightpic.jpeg'
import {allPost} from '../../redux-toolkit/postAction'
const Center = () => {
    const { posts } = useSelector(state => state)
    const {userData }= useSelector(state=>state.login)
    const dispatch = useDispatch()
  
    useEffect(()=>{
        if(userData.token) dispatch(allPost())
     },[dispatch,userData.token])
    return (
        // <div>he</div>
        <div>
            {posts.allposts.map(post => (
                <div key={post._id}>
                    <div className="flex items-center flex-col mt-10 text-2xl  text-blue-500">
                        <h1 className='flex flex-col justify-center  text-4xl mb-2 text-green-500'>
                            推荐
                        </h1>

                        <h1 className='flex flex-col mt-6 justify-center  text-3xl '>{post.title}</h1>
                        <h1 className='flex flex-col mt-3 justify-center  text-3xl '>{post.username}</h1>
                        
                        <h1 className='flex flex-col mb-3 justify-center  text-3xl '>{post.content}</h1>
                        <img src={rightpic} className="w-11/12 h-auto rounded-md" />

                    </div>
                </div>
            ))}
        </div>
    )
}


export default Center
