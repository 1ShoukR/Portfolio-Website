import React from 'react'
import "../Css/createAccount.css"

const CreateAccount = () => {
  const handleSubmit = (e) => {
    console.log(
      e.target.form[0].value,
      e.target.form[1].value,
      e.target.form[2].value,
      e.target.form[3].value,
      e.target.form[4].value,
      e.target.form[5].value
    );
    e.preventDefault();
    console.log('I am working')
  }
  return (
    <div className="container">
      <form className="form">
        <h2>Register an Account</h2>
        <div className="form-control">
          <label htmlFor='first name'>First Name</label>
          <input type="text" className="username" placeholder="Enter First Name" />
        </div>
        <div className="form-control">
          <label htmlFor="Last Name">Last Name</label>
          <input type="text" className="lastName" placeholder="Enter Last Name" />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="text" className="email" placeholder="Enter email" />
        </div>
        <div className="form-control">
          <label htmlFor="username">username</label>
          <input type="text" className="username" placeholder="Enter username" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Enter password</label>
          <input type="password" className="password" placeholder="Enter your password"/>
        </div>
        <div className="form-control">
          <label htmlFor="password2">Renter password</label>
          <input type="password" className="password2" placeholder="Renter your password"/>
        </div>
        <button onClick={handleSubmit} type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateAccount