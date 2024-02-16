// import dotenv from 'dotenv'
import express from 'express'
// import bodyParser from 'body-parser'
// import { createArticle } from './createArticle'
// import { viewArticle } from './viewArticle'
// import cors from 'cors'

const app = express()
// dotenv.config({ path: '.env' })
// dotenv.config({})
// app.use(cors())

// const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3334

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

// createArticle(app)
// viewArticle(app)

app.get('/', () => {
  console.log('Hello world')
})

try {
  app.listen(3333, () => {
    console.log(`Servidor iniciado na porta 3333`)
  })
} catch (error) {
  console.log(error)
}
