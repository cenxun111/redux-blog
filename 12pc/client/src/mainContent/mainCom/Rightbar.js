import React from 'react'
import rightpic from '../../images/rightpic.jpeg'
const Rightbar = () => {
    return (
        <div className="flex flex-col  mr-10">
      <div className="fixed h-full overflow-y-scroll">
      {/* <div> */}
      <form className="flex justify-center pt-10">
        <input
          placeholder="You serach"
          className=" focus:ring-purple-300 focus:border-transparent bg-gray-100 rounded-lg p-2 mr-4"
        />
        <button
          className="bg-purple-300 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 
        rounded-lg px-2"
        >
          Serach
        </button>
      </form>
      <div className="flex items-center flex-col mt-10 text-2xl  text-blue-500">
        <ul>
          <li>减肥快快乐乐了</li>
          <li>CFADSFSADDGASGOCK</li>
          <li>Cgsdgsagsag OCK</li>
          <li>COGASGSAGSAGCK</li>
          <li>COCGASDGASGSAGK</li>
          <li>COCGASDGASGK</li>
        </ul>
          
      </div>
      
        <div className="flex items-center flex-col mt-10 text-2xl  text-blue-500">
        <h1 className='flex flex-col justify-center  text-4xl mb-2 text-green-500'>
        推荐
        </h1>
      
        <h1 className='flex flex-col mt-6 justify-center  text-3xl '>title</h1>
        <h1 className='flex flex-col mb-3 justify-center  text-3xl '>text</h1>
        <img src= {rightpic} className="w-11/12 h-auto rounded-md"/>
        
        <h1 className='flex flex-col pt-8 justify-center  text-3xl '>title</h1>
        <h1 className='flex flex-col pb-3 justify-center  text-3xl '>text</h1>
        <img src= {rightpic} className="w-11/12 h-auto rounded-md"/>
        </div>
       
        {/* <div className="flex items-center flex-col mt-10 text-2xl  text-blue-500">
        <h1 className='flex flex-col justify-center  text-4xl my-4 text-green-500'>
        what's NEW 
        </h1>
      
        <h1 className='flex flex-col mt-6 justify-center  text-3xl '>title</h1>
        <h1 className='flex flex-col mb-3 justify-center  text-3xl '>text</h1>
        <video className="w-11/12 h-auto rounded-md" controls>
          <source src= {os} type="video/mp4"/>
          </video>
        
        <h1 className='flex flex-col pt-8 justify-center  text-3xl '>title</h1>
        <h1 className='flex flex-col pb-3 justify-center  text-3xl '>text</h1>
        <video className="w-11/12 h-auto rounded-md" controls>
          <source src= {jp} type="video/mp4"/>
          </video>
          <h1 className='flex flex-col pt-8 justify-center  text-3xl '>title</h1>
        <h1 className='flex flex-col pb-3 justify-center  text-3xl '>text</h1>
        <video className="w-11/12 h-auto rounded-md" controls>
          <source src= {fs} type="video/mp4"/>
          </video>
        </div> */}
        </div>
        </div>
        )}
    

export default Rightbar
