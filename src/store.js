import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import myNotepads from './reducers/myNotepads.js'
import signupForm from './reducers/signupForm.js'
import notepadForm from './reducers/notepadForm.js'
import users from './reducers/users.js'

const reducer = combineReducers({
   currentUser, loginForm, myNotepads, signupForm, notepadForm, users
})

const state = {
   currentUser: currentUser, 
   loginForm: loginForm, 
   myNotepads: myNotepads, 
   signupForm: signupForm,
   notepadForm: notepadForm, 
   users: users
}
  
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const note = createStore(reducer, state, composeEnhancer(applyMiddleware(thunk)))

export default note