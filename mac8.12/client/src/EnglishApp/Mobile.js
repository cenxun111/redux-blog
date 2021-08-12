import React from 'react'
import { Link } from "react-router-dom"
const Mobile = () => {
    return (
        <div>
            <div className="flex py-6  justify-center text-4xl text-center bg-gray-100 rounded-3xl">
              <div className="flex justify-center pt-4 ">
                <h1 className="py-3 px-6 text-white rounded-lg bg-green-400 shadow-lg block md:inline-block"><Link to ="addword">添加</Link></h1>
              </div>
              <div className="flex justify-center pt-4">
                <h1 className=" py-3 px-6 text-white rounded-lg bg-green-400 shadow-lg block md:inline-block"><Link to ="addword">收藏</Link></h1>
              </div>
              <div className="flex justify-center pt-4">
                <h1 className=" py-3 px-6 text-white rounded-lg bg-green-400 shadow-lg block md:inline-block"><Link to ="chilling">阅读</Link></h1>
              </div>
            </div>
            <div className="flex-col justify-center">
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
            </div>
            </div>
          );
    
}

export default Mobile
