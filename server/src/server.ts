import express, { Express } from 'express';
import cors from 'cors'
import morgan from 'morgan'

import user_router from './router/user';

const app: Express = express();

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))

app.use('/', user_router)

export default app