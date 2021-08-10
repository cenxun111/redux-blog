import React from "react";
import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <div className="flex-col p-4 mt-32 text-4xl text-center bg-gray-100 rounded-3xl">
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
  );
};

export default Menu;
