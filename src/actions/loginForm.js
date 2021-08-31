export const updateLogin = (formData) => {
    return {
        type: "UPDATE_LOGIN",
        formData
    }
}

export const resetLogin = () => {
    return {
        type: "RESET_LOGIN"
    }
}