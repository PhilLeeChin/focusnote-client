export const updateSignup = (formData) => {
    return {
        type: "UPDATE_SIGNUP",
        formData
    }
}

export const resetSignup = () => {
    return {
        type: "RESET_SIGNUP"
    }
}