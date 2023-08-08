import React from 'react'
import './Signup.css'
import barbie from '../../img/barbie.jpeg'
const Signup = () => {
  return (
   <>
     <div className="signup">
        <div className="barbieimage">
            <img src={barbie} alt="barbie" />
        </div>
        <div className="signupbox">
            <h4>Sign Up to Our Newsletter</h4>
           <input type="text" /> <span><button className='signinbtn'>SIGN IN</button></span>
        </div>
     </div>
       
   </>
  )
}
export default Signup
