export const sendMail = async (form) => {
    let response = await fetch(
			`http://portfoliowebsite-env.eba-epte4yiv.us-east-1.elasticbeanstalk.com/send_mail/send_mail_confirm`,
			{
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
				body: JSON.stringify(form), // body data type must match "Content-Type" header
			}
		);
    const json = await response.json(); // parses JSON response into native JavaScript objects
    console.log(json)
}