import React, { useState } from 'react';
import CountdownTimer from '../../Components/Countdown/CountdownTimer';
import  {questions} from '../../db/db'
import {useNavigate} from 'react-router-dom'
const Exam = () => {
    const navigate = useNavigate()
    const handleTimeUp = () => {
        alert("Time's up!");
        navigate('/result')
        // Handle quiz submission or timeout logic here
      };
    const [questionNo, setQuestionNo] = useState(0);
    const onNext = () => {
        if (questionNo < questions.length - 1) {
          setQuestionNo((prev) => prev +1 );  
          console.log(questionNo)
        }
        else {
            setQuestionNo(0)
        }

    }
     const onSumbit = () => {
        const confirmSubmit = window.confirm("Are you sure you want to submit?");
        if(confirmSubmit) {
            navigate("/result")
        }
        else{ 
            return;
        }
     }

    const {answer_a, answer_b, answer_c, answer_d} = questions[questionNo]?.answers
    return (
        <>
        <div className='flex w-[100%] h-screen flex-col items-center mx-auto bg-secondary'>
            <CountdownTimer duration={300} onTimeUp={handleTimeUp} />
            <div className='flex flex-col w-[75%] mx-auto  mt-10 items-start '>
                <div className='text-question '>
                   <h2 className='font-bold'>Question {questionNo +1 }/{questions.length}</h2> 

                </div>
                <div  className='flex flex-col mt-2 w-[100%]'>
                    <p className='flex text-lg font-bold w-[90%] items-start'>{questions[questionNo]?.question}</p>


                </div>

            </div>
            <div className='w-[90%] flex flex-col mx-auto mt-5 justify-center items-center'>
                <div className=' flex flex-col h-[3.5rem] w-[80%] bg-white  mx-auto justify-center items-center mb-[1.5rem] rounded-sm text-textAnswer font-semibold  hover:bg-primary hover:text-white '>
                {answer_a}

                </div>
                <div className= 'flex flex-col h-[3.5rem] w-[80%] bg-white  mx-auto justify-center items-center mb-[1.5rem] rounded-sm text-textAnswer font-semibold hover:bg-primary hover:text-white  '>
                 {answer_b}

                </div>
                <div className='flex flex-col h-[3.5rem] w-[80%] bg-white  mx-auto justify-center items-center mb-[1.5rem] rounded-sm text-textAnswer font-semibold hover:bg-primary hover:text-white '>
                    {answer_c}
                </div>
                <div className='flex flex-col h-[3.5rem] w-[80%] bg-white  mx-auto justify-center items-center mb-[1.5rem] rounded-sm text-textAnswer font-semibold hover:bg-primary hover:text-white '>
                   {answer_d}
                </div>

                

            </div>
            <div className='flex flex-col items-center justify-center m-6 w-[100%] '>
                <button className='bg-primary mx-auto w-[70%] h-[2.5rem] rounded-lg text-white' onClick={onNext} >
                    Next

                </button>
               {questionNo == questions.length -1 &&
                <button className='bg-primary mx-auto w-[70%] h-[2.5rem] mt-3 rounded-lg text-white' onClick={onSumbit} >
                Submit

            </button>  }

            </div>
        </div>
        </>
    )

}
export default Exam;
