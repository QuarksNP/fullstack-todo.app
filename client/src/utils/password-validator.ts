export const passwordValidator = (password: string) => {
    const letters = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    const number =  /^(?=.*\d).+$/

    if(!letters.exec(password)) {
        return {
            msg: 'Your password must be at least uppercase and lowercase letters',
            available: false
        }
    } else if(!number.exec(password)) {
        return {
            msg: 'Your password must be at least a number',
            available: false
        }
    } else if(password.length < 8) {
        return {
            msg: 'Your password must be at least 8 characters',
            available: false
        }
    }

    return {
        msg: "",
        available: true
    }
}