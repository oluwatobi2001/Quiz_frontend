import React, { useEffect, useState } from 'react';
import CountdownTimer from '../../Components/Countdown/CountdownTimer';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import { answerQuestion , calculateScore } from '../../features/quiz/quiz';

const Exam = () => {
    const navigate = useNavigate()
    const handleTimeUp = () => {
        alert("Time's up!");
        dispatch(calculateScore())
        navigate('/result')
        // Handle quiz submission or timeout logic here
      };

    
      

   
const dispatch = useDispatch(); 
const {questions, currentQuestionIndex, score} = useSelector((state) => state.quiz);
console.log(questions?.questions)
    const [selectedOption, setSelectedOption]  = useState("")
    const onNext = () => {
        console.log(currentQuestionIndex)
        if (currentQuestionIndex < questions?.questions?.length - 1) {
            dispatch(answerQuestion({index: currentQuestionIndex,
                option: selectedOption}));
            console.log(selectedOption);

        }
        
setSelectedOption("");
    }
     const onSumbit = () => {
        dispatch(answerQuestion({index: currentQuestionIndex,
                option: selectedOption}));
        const confirmSubmit = window.confirm("Are you sure you want to submit?");
        if(confirmSubmit) {
            
            dispatch(calculateScore())
            navigate("/result")
        }
        else{ 
            return;
        }
     }
     console.log(questions?.questions?.[currentQuestionIndex])

     const { 
        answer_a = 'N/A', 
        answer_b = 'N/A', 
        answer_c = 'N/A', 
        answer_d = 'N/A' 
      } = questions?.questions[currentQuestionIndex]?.answers || {};
    return (

       
        <> {questions.questions[currentQuestionIndex] ?
            <div className='flex w-[100%] h-screen flex-col items-center mx-auto bg-secondary'>
            <CountdownTimer duration={300} onTimeUp={handleTimeUp} />
            <div className='flex flex-col w-[75%] mx-auto  mt-10 items-start '>
                <div className='text-question '>
                   <h2 className='font-bold'>Question {currentQuestionIndex +1 }/{questions?.questions.length}</h2> 

                </div>
                <div  className='flex flex-col mt-2 w-[100%]'>
                    <p className='flex text-lg font-bold w-[90%] items-start'>{questions?.questions[currentQuestionIndex]?.question}</p>


                </div>

            </div>
            <div className='w-[90%] flex flex-col mx-auto mt-5 justify-center items-center'>
                <div className=' flex flex-col h-[3.5rem] w-[80%]  px-1 bg-white cursor-pointer mx-auto justify-center 
                items-center mb-[1.5rem] rounded-sm text-textAnswer font-semibold  hover:bg-primary
                 hover:text-white ' onClick={() =>setSelectedOption("answer_a")}>
                {answer_a}

                </div>
                <div onClick={() =>setSelectedOption("answer_b")}  className= 'flex cursor-pointer px-1 flex-col h-[3.5rem] w-[80%] bg-white  mx-auto justify-center items-center mb-[1.5rem] rounded-sm text-textAnswer font-semibold hover:bg-primary hover:text-white  '>
                 {answer_b}

                </div>
                <div onClick={() =>setSelectedOption("answer_c")} className='flex  px-1 cursor-pointer flex-col h-[3.5rem] w-[80%] bg-white  mx-auto justify-center items-center mb-[1.5rem] rounded-sm text-textAnswer font-semibold hover:bg-primary hover:text-white '>
                    {answer_c}
                </div>
                <div onClick={() =>setSelectedOption("answer_d")} className='flex  px-1 cursor-pointer flex-col h-[3.5rem] w-[80%] bg-white  mx-auto justify-center items-center mb-[1.5rem] rounded-sm text-textAnswer font-semibold hover:bg-primary hover:text-white '>
                   {answer_d}
                </div>

                

            </div>
            <div className='flex flex-col items-center justify-center m-6 w-[100%] '>
                <button className='bg-primary mx-auto w-[70%] h-[2.5rem] rounded-lg text-white' onClick={onNext} >
                    Next

                </button>
               {currentQuestionIndex == questions?.questions.length - 1 &&
                <button className='bg-primary mx-auto w-[70%] h-[2.5rem] mt-3 rounded-lg text-white' onClick={onSumbit} >
                Submit

            </button>  }

            </div>
        </div>
        
        : 
        
        
        <p className='flex flex-col items-center justify-center mx-auto '> loading</p>}
        
        </>
    )

}
export default Exam;
