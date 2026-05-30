import bcrypt from 'bcrypt'
import sql from '../database/db.js'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export default async function authRoutes(app) {
    
    app.post('/signin', async (request, reply) => {
        const { email, password } = request.body

        const user = await sql `
            SELECT * FROM users
            WHERE email = ${email}
        `

        if (user.length === 0) {
            return reply.status(401).send({
                message: 'Invalid credentials'
            })
        }

        const isValidPassword = await bcrypt.compare(
            password,
            user[0].password
        )

        if (!isValidPassword) {
            return reply.status(401).send({
                message: 'Invalid credentials'
            })
        }

        const token = jwt.sign(
            {
                id: user[0].id,
                email: user[0].email,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1d'
            }
        )

        return reply.send({
            token
        })
    })

    app.post('/signup', async (request, reply) => {
        const { email, password } = request.body

        const hashedPassword = await bcrypt.hash(password, 10)

        const userAlreadyExists = await sql `
            SELECT * FROM users
            WHERE email = ${email}
        `

        if (userAlreadyExists.length > 0) {
            return reply.status(400).send({
                message: 'User already exist'
            })
        }

        await sql `
            INSERT INTO users (email, password)
            values (${email}, ${hashedPassword})
        `

        return reply.status(201).send({
            message: 'User created'
        })
    })

    // app.post('/reset_password', async (request, reply) => {
    //     const { email } = request.body

    //     const userExist = await sql `
    //         SELECT * FROM users
    //         WHERE email = ${email}
    //     `
        
    //     if (userExist.length === 0) {
    //         return reply.status(400).send({
    //             message: 'User not found'
    //         })
    //     }

    //     return reply.status(201).send({
    //         message: 'Password reset email sent'
    //     })
    // })
}