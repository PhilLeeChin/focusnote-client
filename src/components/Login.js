import React from 'react'
import { connect } from 'react-redux'
import { updateLogin } from '../actions/loginForm.js'
import { login } from "../actions/currentUser.js"

const Login = (loginFormData) => {

    const handleInput = e => {
        const { name, value } = e.target
        const updateForm = {
            ...loginFormData,
            [name]: value
        }
        updateLogin(updateForm)
    }

    const handleSubmit = e => {
        e.preventDefault()
        login(loginFormData, history)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Username" value={loginFormData.username} name="username" type="text" onChange={handleInput} />
            <input placeholder="Password" value={loginFormData.password} name="password" type="text" onChange={handleInput} />
            <input type="submit" value="Login"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLogin, login } )(Login)