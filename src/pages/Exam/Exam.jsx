import React from 'react';
import CountdownTimer from '../../Components/Countdown/CountdownTimer';

const Exam = () => {
    const handleTimeUp = () => {
        alert("Time's up!");
        // Handle quiz submission or timeout logic here
      };
    
    return (
        <>
        <div className='flex w-[100%] h-screen flex-col items-center mx-auto bg-secondary'>
            <CountdownTimer duration={300} onTimeUp={handleTimeUp} />
            <div className='flex flex-col w-[75%] mx-auto  mt-10 items-start '>
                <div className='text-question '>
                   <h2 className='font-bold'>Question</h2> 

                </div>
                <div  className='flex flex-col mt-2'>
                    <p className='flex text-lg font-bold w-[75%] items-start'> Who is the current president of the United States</p>


                </div>

            </div>
            <div className='w-[90%] flex flex-col mx-auto mt-5 justify-center items-center'>
                <div className=' flex flex-col h-[3rem] w-[80%] bg-white  mx-auto justify-center items-center mb-[1rem] rounded-sm text-textAnswer font-semibold  hover:bg-primary hover:text-white '>
                    Ahmed Bola Tinubu

                </div>
                <div className= 'flex flex-col h-[3rem] w-[80%] bg-white  mx-auto justify-center items-center mb-[1rem] rounded-sm text-textAnswer font-semibold hover:bg-primary hover:text-white  '>
                    Justin Trudeau

                </div>
                <div className='flex flex-col h-[3rem] w-[80%] bg-white  mx-auto justify-center items-center mb-[1rem] rounded-sm text-textAnswer font-semibold hover:bg-primary hover:text-white '>
                    Vladmir Putin
                </div>
                <div className='flex flex-col h-[3rem] w-[80%] bg-white  mx-auto justify-center items-center mb-[1rem] rounded-sm text-textAnswer font-semibold hover:bg-primary hover:text-white '>
                    Donald Trump
                </div>

                

            </div>
            <div className='flex flex-col items-center justify-center m-6 w-[100%] '>
                <button className='bg-primary mx-auto w-[70%] h-[2.5rem] rounded-lg text-white' >
                    Next

                </button>
            </div>
        </div>
        </>
    )

}
export default Exam;
