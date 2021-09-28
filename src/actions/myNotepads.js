import { resetNotepad } from './notepadForm.js';

export const setNotepads = notepad => {
    return {
        type: "SET_NOTEPADS",
        notepad
    }
}

export const clearNotepads = () => {
    return {
        type: "CLEAR_NOTEPADS"
    }
}

export const addNotepad = notepad => {
    return {
        type: "ADD_NOTEPAD",
        notepad
    }
}

export const deleteNotepadHit = notepadId => {
    return {
        type: "DELETE_NOTEPAD",
        notepadId
    }
}

export const updateNotepadHit = notepad => {
    return {
        type: "UPDATE_NOTEPAD",
        notepad
    }
}

//async actions
export const getMyNotepads = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/users/:user_id/notepads", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setNotepads(response.data))
             }
        })
        .catch(console.log)
    }
}

export const createNotepad = (notepadData, history) => {
    return dispatch => {
        const sendNotepadData = {
            title: notepadData.title,
            note: notepadData.note,
            user_id: notepadData.userId
        }
        return fetch("http://localhost:3001/api/users/:user_id/notepads", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendNotepadData)
        })
        .then(resp => resp.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(addNotepad(response.data))
                dispatch(resetNotepad())
                history.push(`/notepads/${response.data.id}`)
            }
        })
        .catch(console.log)
    }
}

export const updateNotepad = (notepadData, history) => {
    return dispatch => {
        const sendNotepadData = {
            title: notepadData.title,
            note: notepadData.note
        }
        return fetch(`http://localhost:3001/api/users/:user_id/notepads/${notepadData.notepadId}`,{
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendNotepadData)
        })
        .then(resp => resp.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else { 
                dispatch(updateNotepad(response.data))
                history.push(`/notepads/${response.data.id}`)
            }
        })
        .catch(console.log)
    }
}

export const deleteNotepad = (notepadId, history) => {
    return dispatch => {
        return fetch(`http://localhost:3001/api/users/:user_id/notepads/${notepadId}`, {
            credentials: "include",
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(deleteNotepad(notepadId))
                history.push(`/notepads`)
            }
        })
        .catch(console.log)
    }
}