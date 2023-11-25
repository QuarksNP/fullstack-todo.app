import { compare } from "bcrypt";

export const comparePassword = (password: string, db_password: string): Promise<boolean> | boolean => {
    return compare(password, db_password)
}