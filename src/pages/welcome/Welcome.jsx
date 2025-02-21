import React, {useEffect, useState} from 'react';
import axios  from 'axios';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

const Welcome =() => {

    const navigate = useNavigate()
    const [userInfo, setUserInfo] = useState(null)
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get("http://localhost:5000/v1/users", {withCredentials: true});
                console.log(response.data);
                setUserInfo(response?.data?.user)
            } catch (error) {
                console.error("Axios Error:", error.response ? error.response.data : error.message);
            }
        };
    
        fetchUser();
    }, []);

    const  startExam = () => {
        navigate("/exam")
    }
    
    return (
        <div className='w-full h-screen  flex flex-col'>
            <div className='flex flex-col items-center w-[80%] shadow-lg mx-auto h-screen  justify-center align-middle '>
                <div className='flex flex-col bg-transparent p-2 rounded-xl'>
                    <h3 className='flex mx-auto text-xl items-center text-black'>Instructions</h3>
                </div>
                <div className='flex flex-col mt-4 '>
                    <ul className="flex flex-col items-center  mx-auto justify-center">
                        <li className='flex mb-1'><p>The exam lasts for about 5 minutes</p></li>
                        <li  className='flex mb-1'><p>You are not allowed to use internet resources to source for answers</p></li>
                        <li  className='flex mb-1'>Your web cam must be on always</li>
                        
                    </ul>

                </div>
                <div className='flex flex-col mt-4 w-[10%] items-center shadow-md justify-center rounded-xl bg-primary  mx-auto h-[40px] '>
                    <button className='flex  text-white ' onClick={startExam}>Start</button>
                </div>
                </div>
            
        </div>
    )
}

export default Welcome