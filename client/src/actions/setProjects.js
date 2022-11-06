
const setProjects = async (dispatch) => {
    let projects
    projects = await fetch(process.env.GET_ALL_PROJECTS, {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
			},
			redirect: 'follow',
			referrerPolicy: 'no-referrer',
			body: JSON.stringify(projects),
		});
    const json = await projects.json()
    console.log(json)
    dispatch({ type: 'SET_PROJECTS', payload: json });
};



export default setProjects