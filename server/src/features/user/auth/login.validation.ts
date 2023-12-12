import { check } from "express-validator"
import { checkResult } from "../../../utils"
import { ExpressRequest, ExpressResponse, ExpressNextFunction } from "../../../interfaces"

export const loginValidation = [
    check('username').exists()
                     .notEmpty().withMessage('<username> must not be empty'),
    check('password').exists()
                     .notEmpty().withMessage('<password> must not be empty'),
    (req: ExpressRequest, res: ExpressResponse, next: ExpressNextFunction) => {
        checkResult(req, res, next)
    }

]