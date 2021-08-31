import React from 'react'
import NotepadForm from './NotepadForm.js'
import { createNotepad } from '../actions/myNotepads.js'
import { connect } from 'react-redux'

const CreateNotepad = ({history, createNotepad}) => {
    const handleSubmit = (formData, userId) => {
        createNotepad({
            ...formData, userId
        }, history)
    }
    return <NotepadForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, { createNotepad })(CreateNotepad);