import { getOauth2Server } from '../server'

const server = getOauth2Server()

const authorizationMiddleware = server.authorization((clientId, redirectUri, done) => {
  // 1 - find client by id.
  // 2 - if client does not exit call done callback with err in the first param.
  // 3 - confirm if redirectUri provided is equal to found client redirectUri.
  // 4 - return done callback in this way: done(null, foundClient, redirectUri)
})


export default authorizationMiddleware