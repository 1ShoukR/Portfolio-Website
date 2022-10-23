import { sendAccountInfo } from "./sendAccountInfo";
import { Navigate } from 'react-router-dom';

export const  handleSubmit = async (e) => {
    e.preventDefault();
    let input = {
			firstName: e.target.form[0].value,
			lastName: e.target.form[1].value,
			email: e.target.form[2].value,
			username: e.target.form[3].value,
			password: e.target.form[4].value,
			reenterPassword: e.target.form[5].value,
		};
    if (input) {
        await sendAccountInfo(input);
        alert("User account has been created")
    } else if (input != input){
        alert("There was an error creating your account")
    }
    
    return input
};



