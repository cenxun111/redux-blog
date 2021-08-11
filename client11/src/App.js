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
import SelfPosts from './posts/SelfPosts';
import Lenglish from './EnglishApp/Lenglish';
import AddWord from './EnglishApp/Func.js/AddWord';
import AllWords from './EnglishApp/Func.js/AllWords';
import Chilling from './EnglishApp/Func.js/Chilling';
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
                <SelfPosts />
            </Route>
            <Route path ="/english">
                <Lenglish />
            </Route>
            <Route path ="/addword">
                <AddWord />
            </Route>
            <Route path ="/allwords">
                <AllWords />
            </Route>
            <Route path ="/chilling">
                <Chilling />
            </Route>
            </Switch>
        </Router>
    )
}

export default App
