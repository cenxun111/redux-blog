import React,{ useState,useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux'
import { createNewWord } from "../../redux-toolkit/wordAction";

const AddWord = () => {
    const {login}= useSelector(state=>state)
    const dispatch = useDispatch()
    const [user,setUser] = useState([])
    const [english,setEnglish] = useState("");
    const [chinese,setChinese] = useState("");
    const username = user.username
  useEffect(()=>{
    setUser(login.userInfo)
  })
    const handleSubmit = (e) =>{
        e.preventDefault();
        createNewWord({english,chinese,username},dispatch)
    }
  return (
   
      <form className="col-span-3  sm:col-span-2 md:col-span-3" onSubmit={handleSubmit}>
      <div className="flex-col justify-center">
        <div className="flex justify-center mt-4">
          <input
            className=" py-2 px-3 rounded-lg border-2 border-purple-300 bg-gray-200 mt-1  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="english"
            onChange={(e) => setEnglish(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <input
            className=" py-2 px-3 rounded-lg border-2 border-purple-300 bg-gray-200 mt-1  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            type="text"
            placeholder="🀄️"
            onChange={(e) => setChinese(e.target.value)}
          />
        </div>
        <button className="p-2 mt-8 bg-green-600 rounded-md w-28    disabled:opacity-50" type="submit" >ADD</button>
      </div>
    </form>
  );
};

export default AddWord;
