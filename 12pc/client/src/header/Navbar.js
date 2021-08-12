import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom"
import {useSelector} from 'react-redux'
import { logout } from '../redux-toolkit/authAction'
import Hidden from "@material-ui/core/Hidden";
const Navbar = () => {
  const {login}= useSelector(state=>state)
  const [user,setUser] = useState([])
  const dispatch = useDispatch()
  useEffect(()=>{
    setUser(login.userInfo)
  })
  // console.log(login.userData.token)
 
    return (
        <div className="flex justify-between  bg-gray-400 pt-2 pb-2  px-20 rounded-md">
        <h1 className="text-2xl font-semibold " ><Link to ="/">homepage</Link></h1>
         {/* {userData.map(user =>
        <h1>{user._id}</h1>)}  */}
        
      
        {/* <div className="relative mx-auto text-gray-600">
          <input
            className="border-2 border-gray-800 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">尋</button>
        </div> */}
       <Hidden smDown>
        <div className="flex pr-2">
        {/* <h1 className="text-2xl px-4">
          {userData.token
          </h1> */}
           <h1 className="text-2xl px-4">
          <Link to = {`/user_posts/${user.username}`}>{user.username}</Link>
          </h1>
          <h1 className="text-2xl px-4">
          <Link to="/update">Update</Link>
          </h1>
          <h1 className="text-2xl px-4">
          <Link to="/english">ENGLISH</Link>
          </h1>
          {!login.userData.token && (
          <div className="flex pr-2">
                <h1 className="text-2xl px-4">
                <Link to="/login">Login</Link>
                </h1>
                <h1 className="text-2xl px-4">
                <Link to="/register">Register</Link>
                 </h1>
                 </div>
          )}
      
           <button className="text-2xl px-4" onClick={() => dispatch(logout())}>Logout</button>
          </div>
          </Hidden>
        </div>
    )
}

export default Navbar
