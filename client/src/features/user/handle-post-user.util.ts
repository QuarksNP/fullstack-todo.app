import { postUser } from "src/api/post-user"


export const handlePostUser = (event: React.FormEvent<HTMLFormElement>, endpoint: string) => {

    event.preventDefault()

    const fields = Object.fromEntries(new window.FormData(event.currentTarget))

    postUser(endpoint, fields)

}