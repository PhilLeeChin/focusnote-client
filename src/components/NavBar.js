import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout.js'

const NavBar = ({ currentUser, loggedIn }) => {
    return (
        <div className="NavBar">
            <NavLink exact activeClassName="active" to="/notepads" >My Notes</NavLink>
            <NavLink exact activeClassName="active" to="/notepads/new">Add New Note</NavLink>
            { loggedIn ? <><p id="loggedin">{currentUser.attributes.name} is logged in</p><Logout/></> : null}
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser, loggedIn: !!currentUser
    }
}

export default connect(mapStateToProps)(NavBar)