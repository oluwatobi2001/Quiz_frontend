import React, {useState, useRef} from 'react';
import {FaGoogle, FaGithub, FaFacebook} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

const Register =()=> {

    const navigate= useNavigate("/")
    const userRef = useRef();
    const passwordRef= useRef();
    const emailRef = useRef();
    const FullRef = useRef()
    const [error, setError] = useState(false)

        const RegSubmit = async(e) => {
            e.preventDefault();
            console.log("hello")
            try {
                const res = await axios.post('https://quizback-oxp5.onrender.com/api/auth/register', 
            { username: userRef.current.value,
                email: emailRef.current.value,
                FullName: FullRef.current.value,
                password: passwordRef.current.value}) ;
                console.log(res.data);
                setError(false)
                navigate("/login");
console.log("help")
            }
            catch(err) {
                console.log(err)
            setError(true)
            }
    
        }
        return (
       
            
            <div className="flex flex-col w-full h-screen justify-center" >
                <div className="flex flex-col">
                    
                    <form className="flex flex-col mb-2 w-full" onSubmit={RegSubmit} >
                        <h3 className="flex flex-col mx-auto mb-5"> Register</h3>
                        <div className="flex flex-col mb-2 w-[50%]  mx-auto items-center  ">
                            <input type="text" placeholder="Email" className=" flex w-full rounded-2xl h-[50px] border-2 p-2 mb-2 border-gray-900"  ref={emailRef}/> 
                              <input type="text" placeholder="Username" className="flex w-full rounded-2xl h-[50px] border-2 p-2 mb-2 border-gray-900" ref={userRef} />
                              <input type="text" placeholder="Full Name" className="flex w-full rounded-2xl h-[50px] border-2 p-2 mb-2 border-gray-900" ref={FullRef} />  
    <input type="password" placeholder="Password" className="flex w-full rounded-2xl h-[50px] border-2 p-2 mb-2 border-gray-900" ref={passwordRef} />
 
    <button className="flex flex-col mx-auto rounded-2xl cursor-pointer  text-white bg-primary lg:w-[50%] w-[80%] h-[30px] text-center items-center justify-center" type="submit">Register</button>
                        </div>
                        
                        <div className='flex flex-row lg:w-[60%] w-[95%] mx-auto items-center justify-center cursor-pointer rounded-3xl border-[0.5px] border-gray-900  px-1' onClick={Google}>
                            <img src={google} className='flex w-[30px] h-[30px] items-center ' />
                            <p className='flex items-center '>Sign in with Google</p>
                            </div>    
                            <p>Sign in with Google</p>
                          
                        <div className="">
                       
   
    <div className=" flex flex-col  mt-1 w-full ">
        <p className='flex flex-row w-full mx-auto items-center justify-center'> Registered previously,  <a href="/login"> Login</a></p>
    </div>{error ? "Error while registering, try again" : ""}
                        </div>
                    </form>
    
                </div>
    
            </div>
)
}
export default Register;
