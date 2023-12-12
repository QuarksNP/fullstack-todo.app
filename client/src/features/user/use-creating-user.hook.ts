import { useState } from "react"

import { toast } from "sonner"

import { postUser } from "src/api/post-user"

import { getFields } from "src/utils/get-fields"

import useLocation from "wouter/use-location"

export const useCreatingUser = () => {

    const [, setLocation] = useLocation()
    const [isCreating, setIsCreating] = useState(false)


    async function handleCreateUser(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const fields = getFields(event.currentTarget)

        setIsCreating(true)

        const token = await postUser("signup", fields)

        if (token) {
            setIsCreating(false)
            toast.success(`User successfully created. Welcome ${fields.fullname}!`)
        } else {
            setIsCreating(false)
        }
    }

    return { isCreating, handleCreateUser }
}