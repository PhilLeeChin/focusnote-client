const initialState = {
    name: "",
    username: "",
    password: "",
}

export default function signupForm(state = initialState, action){
    console.log(initialState)
    switch (action.type) {
        case "UPDATE_SIGNUP":
            return action.formData
        case "RESET_SIGNUP":
            return initialState
        default:
            return state
    }
}