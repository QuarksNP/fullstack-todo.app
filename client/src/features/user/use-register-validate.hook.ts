import { useState } from "react";

import { baseFieldValidator, passwordValidator } from "src/utils";
import { getFields } from "src/utils/get-fields";

export const useRegisterValidate = () => {
    const initialState = {
        fullname: {
            msg: "",
            available: false
        },
        username: {
            msg: "",
            available: false
        },
        password: {
            msg: "",
            available: false
        },
    }

    const [errors, setErrors] = useState(initialState)

    function handleChange(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const currentField = (event.target as HTMLInputElement).name

        const fields = getFields(event.currentTarget) 

        if (currentField === "fullname" || currentField === "username") {

            setErrors(prev => ({
                ...prev,
                [currentField]: baseFieldValidator(fields[currentField] as string)
            }))
        } else if (currentField === "password") {
            setErrors(prev => ({
                ...prev,
                password: passwordValidator(fields.password as string)
            }))
        }
    }

    return { errors, handleChange }
}