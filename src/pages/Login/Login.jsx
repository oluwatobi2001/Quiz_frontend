
import {FaGoogle, FaGithub, FaFacebook} from 'react-icons/fa'
import {Link} from 'react-router-dom'

import React , {useState, useRef, useEffect} from 'react'
import google from '../../assets/google.png'
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {logout, setUser} from '../../features/user/user'




function Login() {
const navigate= useNavigate("/")
const userRef = useRef();
const passwordRef= useRef();


const {user} = useSelector((state) => state.user);
const dispatch = useDispatch();


useEffect(() => {
    const fetchUserData =()=> {
        console.log(user)
if (user !== null) {
navigate('/exam')
}
    }
fetchUserData()
   }, [])

const [error, setError] = useState(false);

const Google = () => {
    window.open("http://localhost:5000/v1/auth/google",  "_self")
}


    const LoginSubmit = async(e)=> {


        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/v1/auth/login', 
        { email: userRef.current.value,
            password: passwordRef.current.value}, {withCredentials: true}) ;
            console.log(res?.data);
            dispatch(setUser(res?.data?.user))
            setError(false);

            navigate('/welcome');
            setUser(res?.data); 
            console.log(user);

        }
        catch(err) {
        setError(true)
        }

    }
    return (
   
        
        <div className="flex flex-col bg-blue w-[100%] h-screen justify-center  text-black items-center" >
            <div className="flex flex-col mb-3 w-full sm:flex-row  md:p-4 ">
                
                <form className=" flex flex-col mx-auto rounded-sm   p-5 md:w-[50%] shadow-lg sm:w-[50%] lg:w-[50%]" onSubmit={LoginSubmit} >
                    <h3 className=" flex flex-col text-center mx-auto mb-2 text-lg"> Login</h3>
                    <div className="flex flex-col mt-2 mb-2 items-center">
                        <input type="text" placeholder="Email" className="flex rounded-2xl mb-7 h-[50px] lg:w-[50%] md:w-[90%] border-2 border-gray-800 px-2 .placeholder-current"  ref={userRef}/>
<input type="" placeholder="Password" className="flex  outline-none rounded-2xl mb-7 border-2 border-gray-800  h-[50px] lg:w-[50%] md:w-[90%] p-1 .placeholder-black" ref={passwordRef} />
<button className="flex flex-col mx-auto rounded-2xl cursor-pointer  text-white bg-primary lg:w-[50%] w-[80%] h-[40px] text-center items-center justify-center" type="submit">Login</button>
                    </div>
                  
                    <div className='flex flex-row lg:w-[60%] w-[95%] mx-auto items-center justify-center cursor-pointer rounded-3xl border-[0.5px] border-gray-900  px-1' onClick={Google}>
                            <img src={google} className='flex w-[30px] h-[30px] items-center ' />
                            <p className='flex items-center '>Sign in with Google</p>
                            </div>

<div className=" flex flex-col w-full mt-5">
    <p className=" flex flex-row mx-auto"> Don't have an account yet?  <span className="px-2"> <Link to='/register'> Register</Link></span></p>
</div>{error ? "Invalid Credentials" : ""}
                   
                </form>

            </div>


        </div>
       
    )
}
export default Login