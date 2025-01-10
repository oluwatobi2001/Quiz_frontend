import React, { useEffect, useState } from 'react';
import axios from '../../lib/api/axios'
import {} from 'react'
const ExamDetails = () => {
const [questionDets, setQuestionDets] = useState([])
  useEffect(() => {
    const FetchQuestion = async() => {
        console.log(import.meta.env.BASE_URL);
        
 const res = await axios.get();
    console.log(res.data)
setQuestionDets(res.data)
    }
   
FetchQuestion();
  }, [])
 return (
    <>
    <p>
  
  questionDets
    </p>

    </>
 )
}

export default ExamDetails

