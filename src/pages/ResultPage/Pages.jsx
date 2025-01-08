import React from 'react';


const ResultPage = () => {
return (
    <div className='flex w-[100%] h-screen flex-col '>

        <div className='flex flex-col w-[100%] mt-[5rem] '>
            <h2 className='flex flex-col mx-auto items-center mt-[3rem] font-bold text-xl'> Test Results</h2>

        </div>
        <div className='w-[100px] h-[100px] mt-6 mb-6 rounded-[50%] items-center mx-auto bg-[#275114]'>
            
        </div>
        <div className='flex flex-row w-[100%] justify-around mb-5'>
            <div className='flex flex-col mx-2 p-2'>
            <p>{8/10 * 100}% </p>

            </div>

            
           <div className='flex  flex-col mx-2 p-2'> 
            <p className='flex uppercase items-center justify-center font-medium'>Your score</p>
            <p className=' flex items-center justify-center font-bold text-[40px]'> 8 </p>
            <p className='flex uppercase justify-center font-medium'>passing score: 5</p>
        </div>  
        </div>
       
        <div className='flex flex-col mx-auto w-[50%] h-[35px] bg-primary rounded-lg text-white items-center justify-center mt-5 '>
            <button className='text-lg font-bold'>Leader Board</button>

        </div>

    </div>
)

}

export default ResultPage;