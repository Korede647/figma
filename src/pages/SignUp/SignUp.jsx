import React, { useState } from 'react'
import "./Signup.css"
import { LuEyeClosed } from "react-icons/lu";
import { IoLogoApple } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import Button from '../../components/Button/Button';



const SignUp = () => {

const [surname, setSurname] = useState("");
const [name, setName] = useState("");
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
          <p>Sign up</p>
          </div>

          <input 
          className='input'
          type="text"
           placeholder='Surname'
           value={surname}
           onChange={(e) => setSurname(e.target.value)} />

          <input 
          className='input'
          type="text"
           placeholder='Name'
           value={name}
           onChange={(e) => setName(e.target.value)} />

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

         <div className='input'>
         <input
          id='pw'
           type="text" placeholder='Confirm Password' />
           <LuEyeClosed style={{color: "#4B5563"}}/>

         </div>

          <div className='agree'>
          <input type="checkbox"/>
           <p>
            Yes, I understandand agree to Equipment.ng <b>Terms of Service</b>, including the <b>User Agreement</b> and <b>Privacy Policy</b>
           </p>
          </div>

          <Button link="/login" text="Sign Up to Equipment.ng"/>

         <div className='button'>
         <button className='butt2'>
          <IoLogoApple style={{fontSize: "22px"}} /> 
          <p>Sign up with Apple</p>
          </button>
           
           <button className='butt2'>
           <FcGoogle style={{fontSize: "20px"}} /> 
           <p>Sign up with Google</p>
           </button>
         </div>

           
           
       </form>
    </div>
  )
}

export default SignUp
