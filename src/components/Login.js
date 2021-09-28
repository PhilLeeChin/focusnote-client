import React from 'react'
import { connect } from 'react-redux'
import { updateLogin } from '../actions/loginForm.js'
import { login } from "../actions/currentUser.js"

class Login extends React.Component {
    state = { 
        username: '',
        password: ''
    }

    handleInput = e => {
        this.setState({ [e.target.username]: e.target.value }, () => console.log(this.state))
    }

    handleSubmit = e => {
        e.preventDefault()
       this.props.login(this.state, this.props.history)
       this.setState({
           username: '',
           password: ''
       })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="Username" type="text" defaultValue={this.state.username} name="username" onChange={this.handleInput} />
                <input placeholder="Password" type="password" defaultValue={this.state.password} name="password" onChange={this.handleInput} />
                <input type="submit" value="Login"/>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { updateLogin, login } )(Login)