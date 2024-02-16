import dotenv from 'dotenv'
import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import { createArticle } from './createArticle'
import { viewArticle } from './viewArticle'

const app = express()
dotenv.config({ path: '.env.local' })
dotenv.config({})

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3334

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(createArticle)
app.use(viewArticle)

try {
  app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`)
  })
} catch (error) {
  console.log(error)
}
