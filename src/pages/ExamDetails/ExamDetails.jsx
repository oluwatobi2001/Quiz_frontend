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
    <>
    <p>
  
  questionDets
  <a href="/exam"> exam</a>
    </p>

    </>
 )
}

export default ExamDetails

