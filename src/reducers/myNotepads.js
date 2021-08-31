const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_NOTEPADS":
            return action.notepads
        case "ADD_NOTEPAD":
            return state.concat(action.notepad)
        case "UPDATE_NOTEPAD":
            return state.map(notepad => notepad.id === action.notepad ? action.notepad : notepad)
        case "DELETE_NOTEPAD":
            return state.filter(notepad => notepad.id === action.notepadId ? false : true)
        case "CLEAR_NOTEPADS":
            return initialState
        default:
            return state
    }
}