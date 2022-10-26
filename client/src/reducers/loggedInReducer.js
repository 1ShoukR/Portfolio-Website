const initialState = {
    loggedIn: false,
    userLoginData: []
}


const loggedInReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LOGGEDIN":
            return {
                ...state,
                loggedIn: state.loggedIn = action.payload
            }
        case "SET_USER_LOGIN_INFORMATION":
            return {
                ...state,
                userLoginData: [state.userLoginData, action.payload ]
            }
            default:
                return state
    }
}

export default loggedInReducer