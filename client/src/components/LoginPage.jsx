import React from "react";
import { handleLoginPageSubmit } from "../actions/handleLoginPageSubmit";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import "../Css/createAccount.css"
const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const loggedIn = useSelector((state) => state.loggedIn.loggedIn)
    const debug = console.log()
    // 
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
        <button onClick={(e) => handleLoginPageSubmit(e, dispatch)} type="submit">Submit</button>
    </form>
    </div>
) 
};

export default LoginPage;


