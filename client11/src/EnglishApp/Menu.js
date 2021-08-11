import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
 
  useRouteMatch
} from "react-router-dom";
import AddWord from '../EnglishApp/Func.js/AddWord'
import AllWords from '../EnglishApp/Func.js/AllWords'
import Chilling from '../EnglishApp/Func.js/Chilling'
import EnglishContent from "./EnglishContent";

const Menu = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="grid grid-flow-col grid-cols-3  p-4 mt-32 text-4xl text-center bg-gray-100 rounded-3xl">
      <div>
      <div className=" pt-4 ">
        <h1 className="py-3 px-6 text-white rounded-lg bg-green-400 shadow-lg "><NavLink to ={`${url}/addword`}>添加</NavLink></h1>
      </div>
      <div className=" pt-4">
        <h1 className=" py-3 px-6 text-white rounded-lg bg-green-400 shadow-lg  "><NavLink to ={`${url}/allwords`}>收藏</NavLink></h1>
      </div>
      <div className=" pt-4">
        <h1 className=" py-3 px-6 text-white rounded-lg bg-green-400 shadow-lg"><NavLink to ={`${url}/chilling`}>阅读</NavLink></h1>
      </div>
      <div className=" pt-4">
        <h1 className=" py-3 px-6 text-white rounded-lg bg-green-400 shadow-lg"><NavLink to ={`${url}/jiyi`}>记忆</NavLink></h1>
      </div>
      </div>
   
  
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
