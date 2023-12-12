import { FormEvent, useState } from "react"
import { getFields } from "src/utils/get-fields"

export const useLoginValidator = () => {
    const [emptyFields, setEmptyFields] = useState({
        username: true,
        password: true,
    })

    function handleChange(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const currentField = (event.target as HTMLInputElement).name

        const fields = getFields(event.currentTarget)

        if (currentField === "username" || currentField === "password") {
            setEmptyFields(prev => ({
                ...prev,
                [currentField]: fields[currentField] !== "" ? false : true
            }))
        }
    }

    return { emptyFields, handleChange }
}