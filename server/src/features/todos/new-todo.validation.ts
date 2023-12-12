import { check } from "express-validator";

export const newTodoValidation = [
    check('description').exists().withMessage('must be a field <description>')
                        .notEmpty().withMessage('must not be empty')
                        .isString(),
    check('completed').optional()
                      .isBoolean(),
]