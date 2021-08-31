const initialState = {
    title: "",
    note: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_NEW_NOTEPAD":
            const returnValue = {
                ...state, [action.formData.name]: action.formData.value
            }
            return returnValue
        case "RESET_NEW_NOTEPAD":
            return initialState
        case "SET_FORM_DATA":
            return action.notepadFormData
        default:
            return state
    }
}