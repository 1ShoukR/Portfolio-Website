import React from 'react'
import { handleSubmit } from '../actions/handleSubmit';
import "../Css/createAccount.css"

const CreateAccount = () => {
  const sendFormData = async () => {
    
  }
  return (
    <div className="formContainer">
      <form className="form">
        <div className='formHeader'>
          <h2>Register an Account</h2>
        </div>
        <div className="form-control">
          <label htmlFor='first name'>First Name</label>
          <input type="text" className="username" placeholder="Enter First Name" required/>
        </div>
        <div className="form-control">
          <label htmlFor="Last Name">Last Name</label>
          <input type="text" className="lastName" placeholder="Enter Last Name" required/>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="text" className="email" placeholder="Enter email" required/>
        </div>
        <div className="form-control">
          <label htmlFor="username">username</label>
          <input type="text" className="username" placeholder="Enter username" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Enter password</label>
          <input type="password" className="password" placeholder="Enter your password" required/>
        </div>
        <div className="form-control">
          <label htmlFor="password2">Renter password</label>
          <input type="password" className="password2" placeholder="Renter your password" required/>
        </div>
        <button onClick={handleSubmit} type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateAccount