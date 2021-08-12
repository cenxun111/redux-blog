import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userWords } from "../../redux-toolkit/wordAction";
const AllWords = () => {
  const { login } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [user, setUser] = useState([]);
  const username = user.username;
  const { words } = useSelector((state) => state);

  useEffect(() => {
    setUser(login.userInfo);
  });
  useEffect(() => {
    //   userWords({username},dispatch)
    dispatch(userWords({ username }));
  }, [username]);
  
  return (
    <div className="col-span-3  sm:col-span-2 md:col-span-3">
      
        
      {words.userWords.map((word) => (
            <div className="flex-col p-4 mt-4 text-4xl text-center bg-gray-200 rounded-3xl">
        <div key={word._id}>
            <div className='flex justify-center'>
          <h1 className="pr-28 text-purple-700">{word.english}</h1>
          <h1 className="text-green-500">{word.chinese}</h1>
          </div>
        </div>
        </div>
      ))}
      
     
    </div>
  );
};

export default AllWords;
