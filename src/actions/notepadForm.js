export const updateNotepad = (name, value) => {
    const formData = {name, value}
    return {
        type: "UPDATE_NEW_NOTEPAD",
        formData
    }
}

export const resetNotepad = () => {
    return {
        type: "RESET_NEW_NOTEPAD"
    }
}

export const setFormData = notepad => {
    const notepadFormData = {
        title: notepad.attributes.title,
        note: notepad.attributes.note,
    }
    return {
        type: "SET_FORM_DATA",
        notepadFormData
    }
}