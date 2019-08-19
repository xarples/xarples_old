import { getOauth2Server } from '../server'

const server = getOauth2Server()

const decisionMiddleware = server.decision()

export default decisionMiddleware