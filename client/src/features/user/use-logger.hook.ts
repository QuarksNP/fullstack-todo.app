import { postUser } from "src/api/post-user"
import useLocation from "wouter/use-location"

export const useLogger = (endpoint: string) => {

    const [, setLocation] = useLocation()

    async function handlePostUser(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const fields = Object.fromEntries(new window.FormData(event.currentTarget))

        const token = postUser(endpoint, fields)

        if (await token) {
            setLocation("/")
        }
    }

    return { handlePostUser }

}