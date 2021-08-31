import React from 'react'
import { Link } from 'react-router-dom'

const NotepadCard = ({ notepad }) => {
    return (
        notepad ?
        <div>
            <h3>{notepad.attributes.title}</h3>
            <p>{notepad.attributes.note}</p>
            <p>{notepad.attributes.created_at.strftime("%m-%d-%Y at %H:%M %p")}</p>
            <p>{notepad.attributes.updated_at.strftime("%m-%d-%Y at %H:%M %p")}</p>
            <Link to={`/notepads/${notepad.id}/edit`}>Append notepad</Link>
        </div>:
        <p>This is your Notepad card.</p>
    )
}

export default NotepadCard