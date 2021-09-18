import { resetLogin } from "./loginForm.js"
import { resetSignup } from "./signupForm.js"
import { getMyNotepads, clearNotepads} from "./myNotepads.js"

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER", user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

// asynchronous action creators
export const login = (credentials, history) => {
    return dispatch => {
        return fetch("http://localhost:3001/api/login", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(resp => resp.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setCurrentUser(response.data))
                dispatch(getMyNotepads())
                dispatch(resetLogin())
                history.push('/')
            }
        })
        .catch(console.log)
    }
}

export const signup = (credentials, history) => {
    return dispatch => {
        const userDetails = {
            user: credentials
        }
        return fetch("http://localhost:3001/api/signup", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userDetails)
        })
        .then(resp => resp.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setCurrentUser(response.data))
                dispatch(getMyNotepads())
                dispatch(resetSignup())
                history.push('/')
            }
        })
        .catch(console.log)
    }
}

export const logout = e => {
    return dispatch => {
        dispatch(clearCurrentUser())
        dispatch(clearNotepads())
        return fetch('http://localhost:3001/api/logout', {
            credentials: "include",
            method: "DELETE"
        })
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/get_current_user", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(response => {
            if(response.error) {
                alert(response.error)
            } else {
                dispatch(setCurrentUser(response.data))
                dispatch(getMyNotepads(response.data.attributes.notepads))
            }
        })
        .catch(console.log)
    }
}