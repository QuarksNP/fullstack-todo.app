
import { db, hashPassword, createJWT, createError } from "../../utils"

import { ExpressNextFunction, ExpressRequest, ExpressResponse } from "../../interfaces"

import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"

export const createUser = async (req: ExpressRequest, res: ExpressResponse, next: ExpressNextFunction) => {

    try {
        const user = await db.user.create({
            data: {
                fullname: req.body.fullname,
                username: req.body.username,
                password: await hashPassword(req.body.password)
            }
        })

        const token = createJWT(user)
        res.json({ token })

    } catch (error) {
        if (error instanceof PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {

                next(createError("User already exists", 400))
                return
            }
        }
        next(error)
    }

}