import React from 'react'
import { updateNotepad } from '../actions/notepadForm'
import { connect } from 'react-redux'

const NotepadForm = ({ formData, updateNotepad, userId, notepad, handleSubmit, editNote }) => {

    const { title, note } = formData

    const handleChange = e => {
        const { name, value } = e.target
        updateNotepad(name, value)
    }

    return (
        <form onSubmit={e => {
            e.preventDefault()
            handleSubmit(formData)   
        }}>
            <input placeholder="title" name="title" onChange={handleChange} value={title}/>
            <br />
            <input placeholder="note" name="note" onChange={handleChange} value={note}/>
            <br />
            <input type="submit" value={editNote ? "Update Notepad" : "Create Notepad"}/>
        </form>
    )
};

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return{
        formData: state.notepadForm,
        userId
    }
}

export default connect(mapStateToProps, {updateNotepad})(NotepadForm)