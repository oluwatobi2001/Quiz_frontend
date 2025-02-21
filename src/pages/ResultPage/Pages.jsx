import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {} from '../../features/quiz/quiz'
import axios from 'axios'
const ResultPage = () => {

    const {score} = useSelector((state) => state.quiz)
    const [pass , setPass] = useState(false);
const navigate = useNavigate();
    useEffect(()=> {

const uploadScore  = async() => {
const res =  await axios.post("http://localhost:5000/v1/users/upload-score" , {
    score : Number(score) * 10
   
}, {withCredentials: true})
console.log(res)
} 
uploadScore()


        const manageScore =() => {
            if (score >= 5) {
                setPass(true)
            }
            else {
                setPass(false)
            }
        }
        manageScore()
    }, [])

    const onNext = () => {
        navigate('/leaderboard')
        
    }
return (
    <div className='flex w-[100%] h-screen flex-col '>

        <div className='flex flex-col w-[100%] mt-[5rem] '>
            <h2 className='flex flex-col mx-auto  w-full items-center mt-[3rem] font-bold text-xl'> Test Results</h2>

        </div>
        <div className={ pass ? ` w-[100px] h-[100px] mt-6 mb-6 rounded-[50%] items-center mx-auto  bg-[#275114]` :  `w-[100px] h-[100px] mt-6 mb-6 rounded-[50%] items-center mx-auto  bg-red`  }>
            
        </div>
        <div className='flex flex-row w-[70%] justify-around mb-5 mx-auto'>
            <div className='flex flex-col mx-2 p-2 justify-center'>
            <p className='flex flex-col text-3xl font-black mx-auto items-center justify-center'>{Number(score) * 10}  %
            </p>

            </div>

            
           <div className='flex  flex-col mx-2 p-2'> 
            <p className='flex uppercase items-center justify-center font-medium'>Your score</p>
            <p className=' flex items-center justify-center font-bold text-[40px]'> {score}</p>
            <p className='flex uppercase justify-center font-medium'>passing score: 5</p>
        </div>  
        </div>
       
        <div  onClick={onNext} className='flex flex-col mx-auto w-[50%] h-[35px] bg-primary rounded-lg text-white items-center justify-center mt-5 '>
            <button className='text-lg font-bold' >Leader Board</button>

        </div>

    </div>
)

}

export default ResultPage;