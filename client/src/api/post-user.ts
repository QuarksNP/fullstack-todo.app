import { toast } from "sonner";


const BASE_URL = import.meta.env.VITE_SERVER_URL

export const postUser = async (endpoint: string, data:{[k: string]: FormDataEntryValue}) => {
    console.log(data)
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...data
            }),
        })
        
        if(response.status === 400 || response.status === 401 || response.status === 404) {
            const { error }  = await response.json()
            throw new Error(error.msg)

        } else if(response.status === 403) {
            throw new Error("Please, check your credentials")
            
        } else if (!response.ok) {
            throw new Error("Ups! something went wrong")
        }

        const token = await response.json()
        console.log(token)
        toast.success("User successfully created!")
    } catch (error) {
        if(error instanceof Error) {
            toast.success("User successfully created!")
        } else {
            console.log("unexpected error: " + error)
            toast.error("unexpected error")
        }
    }
}
