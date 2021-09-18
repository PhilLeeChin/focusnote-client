import React from 'react'
import { connect } from 'react-redux'
import { updateSignup } from "../actions/signupForm.js"
import { signup } from "../actions/currentUser.js"
class Signup extends React.Component {
    state = {
        name: '',
        username: '',
        password: ''
    }

    handleUserInfo = (e) => {
        this.setState({ [e.target.name]: e.target.value }, () => console.log(this.state) )
    }

    handleSubmit = e => {
        e.preventDefault()
       this.props.signup(this.state, this.props.history)
       this.setState({
           name: '',
           username: '',
           password: ''
       })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="name" value={this.state.name} name="name" type="text" onChange={this.handleUserInfo} />
                <input placeholder="username" value={this.state.username} name="username" type="text" onChange={this.handleUserInfo} />
                <input placeholder="password" value={this.state.password} name="password" type="text" onChange={this.handleUserInfo} />
                <input type="submit" value="Signup" />
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {updateSignup, signup })(Signup)