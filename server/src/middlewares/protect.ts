import { verify } from "jsonwebtoken";
import { ExpressNextFunction, ExpressRequest, ExpressResponse, UserModel } from "../interfaces";
import { createError } from "../utils";

const protect = (req: ExpressRequest, res: ExpressResponse, next: ExpressNextFunction) => {
    const bearer = req.headers.authorization

    try {
        if (!bearer) {
            next(createError('Invalid access: token no provided', 401))
            return
        }

        const [, token] = bearer.split(' ')

        if (!token) {
            next(createError('Invalid access', 401))
            return
        }

        verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                next(createError(`Invalid access token: ${err.name}`, 401))
                return

            } else {
                req.user = decoded as UserModel
                next()
            }
        })

    } catch (error) {
        next(error)
    }
}

export default protect