import React,{useEffect} from 'react'
import Navbar from './header/Navbar'
import Update from './posts/Update'
import Layout from './mainContent/Layout'
import "./App.css";
import {
    BrowserRouter as Router,
    Switch, 
    Route,
    Redirect,
} from "react-router-dom";
import Login from './auth/Login';
import Register from './auth/Register';
import {useSelector,useDispatch} from 'react-redux'
import { refreshToken } from './redux-toolkit/authAction';
import UserPosts from './posts/UserPosts';
// import { allPost } from './redux-toolkit/postAction';
const App = () => {
    const {userData }= useSelector(state=>state.login)
    const {posts} = useSelector(state=>state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(refreshToken())
    },[dispatch])
    // useEffect(()=>{
    //    if(userData.token) dispatch(allPost())
    // },[dispatch,userData.token])
    return (
        <Router>
            <Navbar />
            <Switch>
            <Route exact path="/">
                <Layout />
            </Route>
            <Route path="/login">
            {!userData.token ?<Login/>: <Redirect to ="/"/>}
           
            </Route>
            <Route path ="/register">
            {!userData.token ?<Register/>: <Redirect to ="/"/>}
                {/* <Register /> */}
            </Route>
            <Route path = "/update">
            {!posts.updated ?<Update/>:<Redirect to ="/"/>}
            </Route>
            <Route path ="/user_posts/:username">
                <UserPosts />
            </Route>
            </Switch>
        </Router>
    )
}

export default App
