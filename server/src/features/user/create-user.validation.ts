import { ExpressRequest, ExpressResponse, ExpressNextFunction } from '../../interfaces'

import { check } from 'express-validator';

import { checkResult } from '../../utils';

export const createUserValidation = [
    check('fullname').exists().withMessage('must be a field name')
                      .notEmpty().withMessage('last name must not be empty')
                      .isString(),
    check('username')
        .exists()
        .notEmpty().withMessage('Username must not be empty'),
    check('password')
        .exists()
        .notEmpty().withMessage('Password must not be empty')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
        .isString()
        .custom((value, { req }) => {
            const regex = /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/;

            if (!regex.exec(value)) {
                throw new Error("Password must be at least 1 uppercase letter, lowercase letter and 1 number")
            }

            return true
        }),
    (req: ExpressRequest, res: ExpressResponse, next: ExpressNextFunction) => {
        checkResult(req, res, next)
    }
]