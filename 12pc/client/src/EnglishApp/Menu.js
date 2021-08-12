import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
 
  useRouteMatch
} from "react-router-dom";
import AddWord from '../EnglishApp/Func.js/AddWord'
import AllWords from '../EnglishApp/Func.js/AllWords'
import Chilling from '../EnglishApp/Func.js/Chilling'
import EnglishContent from "./EnglishContent";
import Hidden from "@material-ui/core/Hidden";
const Menu = () => {
  let { path, url } = useRouteMatch();
  return (
  
  
    <div className="grid grid-flow-col grid-cols-3  p-4 pt-32 text-4xl text-center bg-gray-100 rounded-3xl h-screen">
       <Hidden mdDown>
      <div className="w-1/2 mx-auto">
      <div className=" pt-4 ">
        <h1 className="py-3 px-6 text-white rounded-lg bg-green-400 shadow-lg "><Link to ={`${url}/addword`}>添加</Link></h1>
      </div>
      <div className=" pt-4">
        <h1 className=" py-3 px-6 text-white rounded-lg bg-green-400 shadow-lg  "><Link to ={`${url}/allwords`}>记忆</Link></h1>
      </div>
      <div className=" pt-4">
        <h1 className=" py-3 px-6 text-white rounded-lg bg-green-400 shadow-lg"><Link to ={`${url}/chilling`}>阅读</Link></h1>
      </div>
      <div className=" pt-4">
        <h1 className=" py-3 px-6 text-white rounded-lg bg-green-400 shadow-lg"><Link to ={`${url}/jiyi`}>收藏</Link></h1>
      </div>
      </div>
      </Hidden>
   
  
      <Switch>
        <Route exact path={path}>
          <EnglishContent  />
        </Route>
        <Route  path={`${path}/jiyi`}>
          <EnglishContent  />
        </Route>
        <Route path={`${path}/addword`}>
          <AddWord />
          </Route>
        
        <Route path={`${path}/allwords`}>
          <AllWords />
        </Route>
        <Route path={`${path}/chilling`}>
          <Chilling />
        </Route>
      </Switch>
   
      </div>
     
  );
};

export default Menu;
