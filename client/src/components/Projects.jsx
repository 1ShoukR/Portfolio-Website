import React, { useEffect } from 'react'

const Projects = () => {
  const localHostUrl = `http://127.0.0.1:3004/all_projects/get_all_projects`
  const getProjects = async () =>{
    let data
    data = await fetch(
    'http://127.0.0.1:3004/all_projects/get_all_projects',
    {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    }
  );
  const json = await data.json()
  console.log(json)
}
getProjects()
  return (
    <div>
      <h1>Projects</h1>
      <div>
        <p>Projects go here</p>
      </div>
    </div>
  )
}

export default Projects