
import React, { useState } from 'react'
import "./Login.css"
import { LuEyeClosed } from "react-icons/lu";
import { IoLogoApple } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

const LogIn = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = () => {
  console.log("Form submitted");
}

  return (
    <div className='mainDiv2'>
    
       <form className='formDiv2' onSubmit={handleSubmit}>
          <div className='textHead2'>
          <h1>Welcome to Equipment.ng</h1>
          <p>Log in to Equipment.ng</p>
          </div>

         
          <input 
          className='input2'
          type="text" 
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)} />

         <div className='input'>
         <input 
          id='pw'
          type="text" 
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          />
          <LuEyeClosed style={{color: "#4B5563"}}/>
         </div>

          <div className='agree2'>
          <input type="checkbox"/>
           <p>
           Remember me
           <b className='pwforgot'>Forgot Password?</b>
           </p>
          
          </div>

          <Button text="Log In"/>

         <div className='button2'>
         <button className='butt3'>
          <IoLogoApple style={{fontSize: "22px"}} /> 
          <p>Sign up with Apple</p>
          </button>
           
           <button className='butt3'>
           <FcGoogle style={{fontSize: "20px"}} /> 
           <p>Sign up with Google</p>
           </button>
         </div>

         <p className='account'>Dont have an account? 
          {/* <Link  className="link" to="/signUp"> */}
          <b>Create an account</b>
          {/* </Link> */}
          </p>

           
           
       </form>
       </div>
  )
}

export default LogIn
