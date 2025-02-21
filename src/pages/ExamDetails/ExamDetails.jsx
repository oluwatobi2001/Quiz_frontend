import React, { useEffect, useState } from 'react';
import axios from '../../lib/api/axios'
import {useSelector, useDispatch} from 'react-redux'

import {setQuestions} from '../../features/quiz/quiz'

const ExamDetails = () => {
const [questionDets, setQuestionDets] = useState([]);

const {questions, currentQuestionIndex, score} = useSelector((state) => state.quiz);


const dispatch = useDispatch();

  useEffect(() => {
    const FetchQuestion = async() => {
        console.log(import.meta.env.BASE_URL);
        
 const res = await axios.get();
    console.log(res.data)
setQuestionDets(res.data)
dispatch(setQuestions({questions: res.data}))
    }
   
FetchQuestion();
  }, [])
 return (
    <div className='flex h-screen w-full  flex-col items-center justify-center bg-[url(C:\Users\Joshua\quizy\src\assets\bgquiz.jpg)] bg-center bg-no-repeat bg-cover'>


<h2 className='flex  items-center  text-lg mx-auto justify-center flex-row mb-4 w-full'> Welcome to <span className=" flex  font-home font-[800] text-white px-1">{" "} QUIZY</span></h2>
    
  
  
  <a href="/login" className='flex flex-col w-[130px] h-[40px] font-[500] shadow-lg bg-white rounded-md text-center justify-center items-center'> Get Started</a>
    

    </div>
 )
}

export default ExamDetails

