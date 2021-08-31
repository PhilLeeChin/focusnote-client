import React from 'react';
import NotepadForm from './NotepadForm'
import { updateNotepad, deleteNotepad } from '../actions/myNotepads.js'
import { setFormData, resetNotepad } from '../actions/notepadForm'
import { connect } from 'react-redux'

class FormWrapper extends React.Component {
  componentDidMount(){
    this.props.notepad && this.props.setFormData(this.props.notepad)
  }

  componentDidUpdate(prevProps) {
    this.props.notepad && !prevProps.notepad && this.props.setFormData(this.props.notepad)
  }

  componentWillUnmount() {
    this.props.resetNotepad()
  }

  handleSubmit = (formData) => {
    const { updateNotepad, notepad, history } = this.props
    updateNotepad({
      ...formData,
      notepadId: notepad.id
    }, history)
  }

  render() {
    const { history, deleteNotepad, notepad } = this.props
    const notepadId = notepad ? notepad.id : null
    return  <>
              <NotepadForm editNote handleSubmit={this.handleSubmit} />
              <br/>
              <button style={{color: "blue"}} onClick={()=>deleteNotepad(notepadId, history)}>Remove Note</button>
            </>
  }
};

export default connect(null, { updateNotepad, setFormData, resetNotepad, deleteNotepad })(FormWrapper);