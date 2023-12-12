import { hash } from "bcrypt"

export const hashPassword = (password: string): Promise<string> | string => {
    return hash(password, 10)
}