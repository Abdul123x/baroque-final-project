import React from 'react'
import './Button.css'
import { useNavigate } from 'react-router-dom'
const Button = () => {
  const navigate = useNavigate();
  function handlebutton(){
    navigate("/maindressshop");
  }

  return (
     <div className="btnbtnshopnow">
      <span onClick={handlebutton}>Shop Now</span>
     </div>
  )
}

export default Button



