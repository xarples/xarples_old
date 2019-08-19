import { getOauth2Server } from '../server'

const server = getOauth2Server()

const errorHandlerMiddleware = server.errorHandler()

export default errorHandlerMiddleware