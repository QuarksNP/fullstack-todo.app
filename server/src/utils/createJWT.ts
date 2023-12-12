import { sign } from 'jsonwebtoken'
import { UserModel } from '../interfaces'

export const createJWT = (user: UserModel) => {
    const token = sign({
        username: user.username,
        id: user.id,
    }, process.env.JWT_SECRET_KEY || 'secret');

    return token
}
