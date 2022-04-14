import React from 'react'
import react, {useState} from 'react';

const Form = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="container">
      <form className="firstName">
          <label htmlFor="firstName">First name:</label>
          <input type='text' name='firstName' onChange={(e)=>setFirstName(e.target.value)}/>
      </form>
      {firstName && firstName.length < 2 && <p>First Name must be atleast 2 Characters</p>}
        <form className="firstName">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" name="lastname" onChange={(e)=>setLastName(e.target.value)}/>
        </form>
        {lastName && lastName.length < 2 && <p>First Name must be atleast 2 Characters</p>}
        <form className="firstName">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)}/>
        </form>
        {email && email.length < 5 && <p>First Name must be atleast 5 Characters</p>}
        <form className="firstName">
          <label htmlFor="Password">Password:</label>
          <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} />
        </form>
        {password && password.length < 5 && <p>First Name must be atleast 5 Characters</p>}
        <form className="password">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" name="confirm password" onChange={(e)=>setConfirmPassword(e.target.value)} />
        </form>
        {confirmPassword !== password ? <p style={{color:"red"}} >Password must match</p> : null }
        <p>
        <label>First Name:{firstName} </label> 
        </p>
        <p>
        <label>Last Name:{lastName} </label> 
        </p>
        <p>
        <label>Email:{email} </label> 
        </p>
        <p>
        <label>Password:{password} </label>
        </p>
        <p>
        <label>Confirm Password:{confirmPassword} </label> 
        </p>
    </div>
  )
}

export default Form;