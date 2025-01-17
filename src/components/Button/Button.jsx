import React from 'react'
import "./Button.css"
import { NavLink } from 'react-router-dom';

const Button = (props) => {
  return (
    <NavLink to= {props.link} className="navlink">
    <button type='submit' className= "butt">
        <h4>{props.text}</h4>
    </button>
    </NavLink>
  )
}

export default Button
