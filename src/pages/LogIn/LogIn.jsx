
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
    <div className='mainDiv'>
    
       <form className='formDiv' onSubmit={handleSubmit}>
          <div className='textHead'>
          <h1>Welcome to Equipment.ng</h1>
          <p>Log in to Equipment.ng</p>
          </div>

         
          <input 
          className='input'
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

          <div className='agree'>
          <input type="checkbox"/>
           <p>
           Remember me
           </p>
           <b>Forgot Password?</b>
          </div>

          <Button class="butt" text="Log In"/>

         <div className='button'>
         <button className='butt2'>
          <IoLogoApple /> 
          <p>Sign up with Apple</p>
          </button>
           
           <button className='butt2'>
           <FcGoogle /> 
           <p>Sign up with Google</p>
           </button>
         </div>

         <p>Dont Have An Account? <Link><b>Create an account</b></Link></p>

           
           
       </form>
       </div>
  )
}

export default LogIn
