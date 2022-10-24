import { sendLoginInfo } from "./sendLoginInfo"

export const handleLoginPageSubmit = async (e, navigate) => {
    e.preventDefault()
    let input = {
        username: e.target.form[0].value,
        password: e.target.form[1].value
    }
    if (input) {
        await sendLoginInfo(input)
        alert("You are logged in!")
        navigate('/');
    } else {
        alert("does not Credentials")
    }
}
