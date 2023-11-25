import { Router } from "express";

import { loginValidation, login } from "../features/user/auth";

const router: Router = Router()

router.post('/login', loginValidation, login)

export default router