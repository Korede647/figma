import React, { useState } from 'react'
import "./Signup.css"
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { IoLogoApple } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';



const SignUp = () => {

const [surname, setSurname] = useState("");
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("")

const [isPasswordVisible, setIsPasswordVisible] = useState(false);
const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false)
const [errorMessage, setErrorMessage] = useState("");

const navigate = useNavigate()

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    const toggleConfirmPasswordVisibility = () => {
      setIsConfirmPasswordVisible((prev) => !prev);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);

    if (password && value !== password) {
        setErrorMessage("Passwords do not match");
    } else {
        setErrorMessage("");
    }
};

const handleSubmit = () => {
  e.preventDefault();

  if (!surname || !name || !email || !password || !confirmPassword) {
    setErrorMessage("All fields are required");
    return;
}
// else{
//   navigate('/login')
// }
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
           onChange={(e) => setSurname(e.target.value)}
           required />

          <input 
          className='input'
          type="text"
           placeholder='Name'
           value={name}
           onChange={(e) => setName(e.target.value)}
           required />

          <input 
          className='input'
          type="text" 
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required />

         <div className='input'>
         <input 
          id='pw'
          type={isPasswordVisible ? "text" : "password"}
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required />
          <button className='eye'
          onClick={togglePasswordVisibility}
          style={{ cursor: "pointer" }}
          >
           {isPasswordVisible ? (
                    <LuEye style={{ color: "#4B5563" }} />
                ) : (
                    <LuEyeClosed style={{ color: "#4B5563" }} />
                )}
          </button>
         </div>

         <div className='input'>
         <input
          id='pw'
          type={isConfirmPasswordVisible ? "text" : "password"}
          placeholder='Confirm Password'
          value={confirmPassword} 
          onChange={handleConfirmPasswordChange} 
          required />
          <button className='eye'
          onClick={toggleConfirmPasswordVisibility}
          style={{ cursor: "pointer" }}
          >
          {isConfirmPasswordVisible ? (
                    <LuEye style={{ color: "#4B5563" }} />
                ) : (
                    <LuEyeClosed style={{ color: "#4B5563" }} />
                )}
          </button>
          
         </div>
         {errorMessage && (
                <p style={{ color: "red", marginBottom: "1rem", fontSize: "13px" }}>{errorMessage}</p>
            )}


          <div className='agree'>
          <input type="checkbox" required />
           <p>
            Yes, I understandand agree to Equipment.ng <b>Terms of Service</b>, including the <b>User Agreement</b> and <b>Privacy Policy</b>
           </p>
          </div>

          <Button link = "/login" type= "submit" text="Sign Up to Equipment.ng"/>

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
