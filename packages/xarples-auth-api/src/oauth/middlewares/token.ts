import { getOauth2Server } from '../server'

const server = getOauth2Server()

const tokenMiddleware = server.token()

export default tokenMiddleware