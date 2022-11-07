import React from 'react'
import { handleSubmit } from '../actions/handleSubmit';
import { Button } from '@mui/material';
import "../Css/createAccount.css"

const CreateAccount = () => {
  return (
    <div className="formContainer ">
      <form className="flex flex-col justify-center items-center gap-1.5 mt-20">
        <div className='form'>
          <h2>Register an Account</h2>
        </div>
        <div className="flex flex-col justify-center items-center gap-1.5 mt-20">
          <label htmlFor='first name'>First Name</label>
          <input type="text" className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full text-xl" placeholder="Enter First Name" required/>
        </div>
        <div className="form-control">
          <label htmlFor="Last Name">Last Name</label>
          <input type="text" className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full text-xl" placeholder="Enter Last Name" required/>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="text" className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full text-xl" placeholder="Enter email" required/>
        </div>
        <div className="form-control">
          <label htmlFor="username">username</label>
          <input type="text" className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full text-xl" placeholder="Enter username" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Enter password</label>
          <input type="password" className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full text-xl" placeholder="Enter your password" required/>
        </div>
        <div className="form-control">
          <label htmlFor="password2">Renter password</label>
          <input type="password" className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full text-xl" placeholder="Renter your password" required/>
        </div>
        <Button variant="outlined"
									sx={{
										padding: '10px',
										color: '#F0EAD6',
									}} onClick={handleSubmit} type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default CreateAccount