export const baseFieldValidator = (field: string) => {
    if(field === "") {
        return {
            msg: "Must not be empty",
            available: false
        }
    }
    return {
        msg: "",
        available: true
    }
}