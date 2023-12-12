import { type Data } from "@g_types/index"

export const getFields = (event: HTMLFormElement): Data => {
    const formData = new FormData(event)

    return {
        fullname: formData.get("fullname") ?? "",
        username: formData.get("username") ?? "",
        password: formData.get("password") ?? ""
    }
}