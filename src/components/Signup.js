import React from 'react'
import { connect } from 'react-redux'
import { updateSignup } from "../actions/signupForm.js"
import { signup } from "../actions/currentUser.js"

const Signup = ({ signupFormData, updateSignup, signup, history }) => {
    state = {
        name: "",
        username: "",
        password: "",
    }

    const handleUserInfo = e => {
       this.setState({value: e.target.value})
       updateSignup(this.state)
    }

    const handleSubmit = e => {
        e.preventDefault()
        signup(signupFormData, history)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="name" value={signupFormData.name} name="name" type="text" onChange={handleUserInfo} />
            <input placeholder="username" value={signupFormData.username} name="username" type="text" onChange={handleUserInfo} />
            <input placeholder="password" value={signupFormData.password} name="password" type="text" onChange={handleUserInfo} />
            <input type="submit" value="Signup" />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signup
    }
}

export default connect(mapStateToProps, { updateSignup, signup })(Signup)