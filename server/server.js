import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import documentRoutes from './routes/documentRoutes.js'
import formRoutes from './routes/formRoutes.js'
import authenticationRoutes from './routes/authenticationRoutes.js'

const app = express()

app
  .use(cors())
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(morgan('short'))
  .use('/authentication', authenticationRoutes)
  .use('/documents', documentRoutes)
  .use('/forms', formRoutes)
  .listen(3001, () => console.log(`App is listening on port 3001`))
