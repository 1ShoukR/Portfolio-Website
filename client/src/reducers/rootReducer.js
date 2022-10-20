import { combineReducers } from 'redux';
import favoritesReducer from './favoritesReducer';
import projectsReducer from './projectsReducer';

const rootReducer = combineReducers({
    favorites: favoritesReducer,
    projects: projectsReducer
})

export default rootReducer