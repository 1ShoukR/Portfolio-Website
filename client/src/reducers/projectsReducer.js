const initialState = {
  projects: [],
};


const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROJECTS':
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    case 'REMOVE_PROJECTS':
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project !== action.payload
        ),
      };
    default:
      return state;
  }
};


export default projectsReducer
