import {fastify} from 'fastify'
import cors from '@fastify/cors'
import authRoutes from './routes/auth.js'

const app = fastify()

app.register(cors)

app.register(authRoutes)

app.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3333,
}).then(() => {
    console.log("Server's running")
})