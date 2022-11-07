import React from "react";
import { handleLoginPageSubmit } from "../actions/handleLoginPageSubmit";
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import "../Css/createAccount.css"
const LoginPage = () => {
    const dispatch = useDispatch()
    const debug = console.log()
    return (
			<div className="formContainer">
				<form className="form">
					<div className="flex flex-col justify-center items-center gap-1.5 mt-20">
						<h2>Login</h2>
					</div>
					<div className="form-control">
						<label htmlFor="username">username</label>
						<input
							type="username"
							className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full text-xl"
							placeholder="Enter username"
							required
						/>
					</div>
					<div className="form-control">
						<label htmlFor="Password">Password</label>
						<input
							type="password"
							className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full text-xl"
							placeholder="Enter Password"
							required
						/>
					</div>
					<Button
						variant="outlined"
						sx={{
							padding: '10px',
							color: '#F0EAD6',
						}}
						onClick={(e) => handleLoginPageSubmit(e, dispatch)}
						type="submit">
						Submit
					</Button>
				</form>
			</div>
		); 
};

export default LoginPage;


