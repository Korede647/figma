import React from 'react'
import "./Button.css"

const Button = (props) => {
  return (
    <button type='submit' className= "butt">
        <h4>{props.text}</h4>
    </button>
  )
}

export default Button
