import { sendLoginInfo } from "./sendLoginInfo"

export const handleLoginPageSubmit = async ( e, dispatch) => {
    console.log("this is e", e)
    e.preventDefault()
    let input = {
        username: e.target.form[0].value,
        password: e.target.form[1].value
    }
    if (input) {
        await sendLoginInfo(dispatch, input);
        console.log("You are logged in")
        alert("You are logged in!")
    } else {
        alert("does not Credentials")
    }
}
