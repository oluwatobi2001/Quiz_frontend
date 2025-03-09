import React, { useEffect, useState } from 'react';
import { leaderboard } from '../../db/leaderboard';
import axios from 'axios';

const LeaderboardDetails = () => {

const  [scoreboard, setScoreboard] = useState([])
    useEffect(() => {
        const leaderInfo = async () => {
             const res =  await axios.get("https://quizback-oxp5.onrender.com/v1/users/score")
             console.log(res.data);
           
        
const sortLeaderBoard =  res.data?.sort((a, b) => b.scoreDetail - a.scoreDetail);
setScoreboard(sortLeaderBoard)
        }
        leaderInfo();


       

    }, [])


    return (
        
        <div className='flex flex-col   h-screen bg-secondary'>
            <div className='flex flex-col mx-auto w-[70%]  my-auto align-middle  bg-white rounded-3xl shadow-lg'>

           
            {scoreboard.map((scoreDetails, index) => (
                <div className='   min-w-[90%] flex flex-row h-[40px] justify-center items-center   border-b-2'>
                    <div className=' items-start px-5 basis-1/4'>
                        <p>{index + 1}</p>
                    </div>
                    <div className='basis-1/2'> 
                        {scoreDetails?.user?.username}
                    </div> 
                    <div className=' basis-1/4 justify-end items-end'>
                        {scoreDetails.scoreDetail}
                    </div> 
                    
                </div>
            ) )}
        </div>
         </div>
    )
}

export default LeaderboardDetails;