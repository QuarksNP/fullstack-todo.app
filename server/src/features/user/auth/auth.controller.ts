import { comparePassword, createError, createJWT, db } from "../../../utils"

import { ExpressRequest, ExpressResponse, ExpressNextFunction } from "../../../interfaces"

export const login = async (req: ExpressRequest, res: ExpressResponse, next: ExpressNextFunction) => {
    try {
        const user = await db.user.findUnique({
            where: { username: req.body.username }
        })

        if (!user) {
            next(createError("User not found", 404))
            return
        }

        const isValid = await comparePassword(req.body.password, user.password)

        if (!isValid) {
            next(createError("Invalid password", 401))
            return
        }

        const token = createJWT(user)
        res.json({ token })


    } catch (error) {
        next(error)
    }
}