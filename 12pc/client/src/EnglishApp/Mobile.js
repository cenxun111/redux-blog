import React from 'react'
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
const Mobile = () => {
  let { path, url } = useRouteMatch();
    return (
        <div>
            <div className="flex py-6  justify-center text-4xl text-center bg-gray-100 rounded-3xl">
              <div className="flex justify-center pt-4 ">
                <h1 className="py-3 px-6 text-white rounded-lg bg-green-400 shadow-lg block md:inline-block"><Link to ={`${url}/addword`}>添加</Link></h1>
              </div>
              <div className="flex justify-center pt-4">
                <h1 className=" py-3 px-6 text-white rounded-lg bg-green-400 shadow-lg block md:inline-block"><Link to ={`${url}/allwords`}>记忆</Link></h1>
              </div>
              <div className="flex justify-center pt-4">
                <h1 className=" py-3 px-6 text-white rounded-lg bg-green-400 shadow-lg block md:inline-block"><Link to ={`${url}/chilling`}>阅读</Link></h1>
              </div>
              <div className="flex justify-center pt-4">
                <h1 className=" py-3 px-6 text-white rounded-lg bg-green-400 shadow-lg block md:inline-block"><Link to ={`${url}/jiyi`}>收藏</Link></h1>
              </div>
            </div>
            {/* <div className="flex-col justify-center">
                <div className="flex justify-center">
                <input className=" py-2 px-3 rounded-lg border-2 border-purple-300 bg-gray-200 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                type="text"
                placeholder="english"/>
                </div>
                <div className="flex justify-center">
                    <input className=" py-2 px-3 rounded-lg border-2 border-purple-300 bg-gray-200 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                type="text"
                placeholder="🀄️"/>
                </div>
            </div> */}
            <Hidden mdDown>
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
      </Hidden>
            </div>
          );
    
}

export default Mobile
