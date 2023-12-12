import { useState } from "react"

import { toast } from "sonner"

import { postUser } from "src/api/post-user"

import { getFields } from "src/utils/get-fields"

import useLocation from "wouter/use-location"

export const useLoggerUser = () => {

    const [, setLocation] = useLocation()
    const [isLogging, setIsLogging] = useState(false)


    async function handlePostUser(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()

        const fields = getFields(event.currentTarget)

        setIsLogging(true)

        const token = await postUser("login", fields)

        if (token) {
            setIsLogging(false)
            toast.success(`Welcome back ${fields.username}!`)
        } else {
            setIsLogging(false)
        }
    }

    return { isLogging, handlePostUser }
}