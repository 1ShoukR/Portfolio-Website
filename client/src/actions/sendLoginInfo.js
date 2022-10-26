
export const sendLoginInfo = async (dispatch, input) => {
	const url = `http://127.0.0.1:3004/user_login/user_login_confirm`;
	let response = await fetch(url, {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
			'Content-Type': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: 'follow', // manual, *follow, error
		referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify(input), // body data type must match "Content-Type" header
	});
	const json = await response.json();
	console.log('This is JSON CONSOLE LOG', json);
	console.log('This is response', response.status);
	if (response.status === 200) {
		dispatch({ type: 'SET_LOGGEDIN', payload: true });
    dispatch({type: "SET_USER_LOGIN_INFORMATION", payload: json})
	}
};