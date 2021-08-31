import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyNotepads = props => {
    const notepadCards = props.notepads.length > 0 ?
        props.notepads.map(n => (<p key={n.id}><Link to={`/notepads/${n.id}`}>{n.attributes.title}</Link></p>)) :
        null

        return notepadCards
}

const mapStateToProps = state => {
    return {
        notepads: state.myNotepads
    }
}

export default connect(mapStateToProps)(MyNotepads)