const initialState = {
    name: "",
    username: "",
    password: ""
}

export default function loginForm(state = initialState, action){
    switch (action.type) {
        case "UPDATE_LOGIN":
            return action.formData
        case "RESET_LOGIN":
            return initialState
        default:
            return state
    }
}