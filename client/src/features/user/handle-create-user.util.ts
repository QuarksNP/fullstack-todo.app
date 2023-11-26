import { postUser } from "src/api/post-user"


export const handleCreateUser = (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault()

    const fields = Object.fromEntries(new window.FormData(event.currentTarget))

    postUser("signup", fields)

}