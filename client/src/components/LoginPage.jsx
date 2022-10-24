import React from "react";
import { handleLoginPageSubmit } from "../actions/handleLoginPageSubmit";
import { useNavigate } from 'react-router-dom';
import "../Css/createAccount.css"
const LoginPage = () => {
    const navigate = useNavigate()
  return (
<div className="formContainer">
        <form className="form">
        <div className='formHeader'>
            <h2>Login</h2>
        </div>
        <div className="form-control">
            <label htmlFor='username'>username</label>
            <input type="text" className="username" placeholder="Enter username" required/>
        </div>
        <div className="form-control">
            <label htmlFor="Password">Password</label>
            <input type="text" className="lastName" placeholder="Enter Password" required/>
        </div>
        <button onClick={handleLoginPageSubmit} type="submit">Submit</button>
    </form>
    </div>
) 
};

export default LoginPage;


