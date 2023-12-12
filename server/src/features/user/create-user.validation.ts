import { ExpressRequest, ExpressResponse, ExpressNextFunction } from '../../interfaces'

import { check } from 'express-validator';

import { checkResult } from '../../utils';

export const createUserValidation = [
    check('fullname').exists().withMessage('must be a field <fullname>')
                      .notEmpty().withMessage('<fullname> must not be empty')
                      .isString(),
    check('username')
        .exists()
        .notEmpty().withMessage('<username> must not be empty'),
    check('password')
        .exists()
        .notEmpty().withMessage('<password> must not be empty')
        .isLength({ min: 8 }).withMessage('<password> must be at least 8 characters')
        .isString()
        .custom((value, { req }) => {
            const regex = /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/;

            if (!regex.exec(value)) {
                throw new Error("<password> must be at least 1 uppercase letter, lowercase letter and 1 number")
            }

            return true
        }),
    (req: ExpressRequest, res: ExpressResponse, next: ExpressNextFunction) => {
        checkResult(req, res, next)
    }
]