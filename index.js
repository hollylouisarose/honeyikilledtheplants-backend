import express from 'express'
import mongoose from 'mongoose'
import { port, dbURI } from './config/environment.js'

const app = express()


async function startSever() {
  try {
    await mongoose.connect(dbURI)
    console.log('🌱 Database connected')
    app.listen(port, () => console.log(`🌱 Listening on Port: ${port}`))
  } catch (err) {
    console.log('🌱 Something went wrong!')
    console.log(err)
  }
}

startSever()