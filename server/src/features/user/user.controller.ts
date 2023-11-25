
import { db, hashPassword, createJWT } from "../../utils"

import { ExpressRequest, ExpressResponse } from "../../interfaces"

export const createUser = async (req: ExpressRequest, res: ExpressResponse) => {

    const user = await db.user.create({
        data: {
            fullname: req.body.fullname,
            username: req.body.username,
            password: await hashPassword(req.body.password)
        }
    })

    const token = createJWT(user)
    res.json({ token })

}