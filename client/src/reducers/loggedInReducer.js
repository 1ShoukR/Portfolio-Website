const initialState = {
    loggedIn: false
}


const loggedInReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LOGGEDIN":
            return {
                ...state,
                loggedIn: state.loggedIn = action.payload
            }
            default:
                return state
    }
}

export default loggedInReducer