import express from 'express'
const router = express.Router()
import { signinUser, registerUser } from '../controllers/auth.controller.js'

router.post('/signin', signinUser)
router.post('/signup', registerUser)

export default router