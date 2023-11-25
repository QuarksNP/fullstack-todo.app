import { validationResult } from "express-validator";
import { ExpressRequest, ExpressResponse, ExpressNextFunction } from "../interfaces";

export const checkResult = (req: ExpressRequest, res: ExpressResponse, next: ExpressNextFunction) => {
    try {
        validationResult(req).throw()
        return next()
    } catch (err) {
        res.status(403)
        res.json({ errors: err.array() })
    }
}