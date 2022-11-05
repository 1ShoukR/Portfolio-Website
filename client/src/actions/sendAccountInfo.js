export const sendAccountInfo = async (input) => {
    const url = `http://portfoliowebsite-env.eba-epte4yiv.us-east-1.elasticbeanstalk.com/user_login/create_account`;
    let response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(input) // body data type must match "Content-Type" header
    });
  return response.json(input); // parses JSON response into native JavaScript objects
}
