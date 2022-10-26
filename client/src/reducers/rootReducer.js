import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';
import loggedInReducer from './loggedInReducer';
import projectsReducer from './projectsReducer';

const rootReducer = combineReducers({
    favorites: favoritesReducer,
    projects: projectsReducer,
    loggedIn: loggedInReducer
})

export default rootReducer