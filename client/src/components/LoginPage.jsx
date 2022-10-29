import React from "react";
import { handleLoginPageSubmit } from "../actions/handleLoginPageSubmit";
import { useDispatch } from 'react-redux';
import "../Css/createAccount.css"
const LoginPage = () => {
    const dispatch = useDispatch()
    const debug = console.log()
    return (
<div className="formContainer">
        <form className="form">
        <div className='formHeader'>
            <h2>Login</h2>
        </div>
        <div className="form-control">
            <label htmlFor='username'>username</label>
            <input type="username" className="username" placeholder="Enter username" required/>
        </div>
        <div className="form-control">
            <label htmlFor="Password" >Password</label>
            <input type="password" className="passwordField" placeholder="Enter Password" required/>
        </div>
        <button onClick={(e) => handleLoginPageSubmit(e, dispatch)} type="submit">Submit</button>
    </form>
    </div>
) 
};

export default LoginPage;


