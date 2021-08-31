import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import myNotepads from './reducers/myNotepads.js'
import signupForm from './reducers/signupForm.js'
import notepadForm from './reducers/notepadForm.js'



const reducer = combineReducers({
   currentUser, loginForm, myNotepads, signupForm, notepadForm
})
  
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const note = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default note