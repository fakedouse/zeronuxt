// import User from '~/db/models/user'
import jwt from 'jsonwebtoken'
import { readOne } from '../db'

const refreshTokens = {}

export async function login(req, res) {
    try {
        const params = req.body
        console.log('Logining user: ', params.email)
        const user = await readOne('User', { email: params.email })
        if (!user) {
            console.error('Not user')
            res.statusCode = 401
            res.end('User not found')
            return
        }
        if (params.password !== user.password) {
            console.error('Not password')
            res.statusCode = 401
            res.end('Not true password')
            return
        }
        const refreshToken =
            Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1
        const accessToken = jwt.sign(
            {
                username: user.name,
                email: user.email,
                date: Date.now()
            },
            process.env.JWTsecret,
            {
                expiresIn: '12h'
            }
        )

        refreshTokens[refreshToken] = {
            accessToken,
            user: {
                username: user.name,
                picture: 'https://github.com/nuxt.png',
                email: user.email
            }
        }

        res.writeHead(200, {
            Cookie: JSON.stringify({ accessToken, refreshToken })
        })
        res.end(JSON.stringify({ accessToken, refreshToken }))
    } catch (e) {
        console.error(e)
    }
}

export function refresh(req, res) {
    try {
        const { refreshToken } = req.body

        if (refreshToken in refreshTokens) {
            const user = refreshTokens[refreshToken].user
            const expiresIn = 15
            const newRefreshToken =
                Math.floor(Math.random() * (1000000000000000 - 1 + 1)) + 1
            delete refreshTokens[refreshToken]

            const accessToken = jwt.sign(
                {
                    username: user.username,
                    picture: 'https://github.com/nuxt.png',
                    email: user.email,
                    scope: ['test', 'user']
                },
                process.env.JWTsecret,
                {
                    expiresIn
                }
            )

            refreshTokens[newRefreshToken] = {
                accessToken,
                user
            }

            res.end(
                JSON.stringify({
                    token: {
                        accessToken,
                        refreshToken: newRefreshToken
                    }
                })
            )
        } else {
            res.statusCode(401)
            res.end()
        }
    } catch (e) {
        console.error(e)
    }
}

export function logout(res) {
    try {
        res.end(JSON.stringify({ status: 'OK' }))
    } catch (e) {
        console.error(e)
    }
}
