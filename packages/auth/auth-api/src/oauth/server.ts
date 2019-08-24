import oauth2orize, { OAuth2Server } from 'oauth2orize'

import auth from './auth'

let server: OAuth2Server

export function getOauth2Server () {
  if (!server) {
    server = oauth2orize.createServer()
    server.serializeClient(auth.serializeClient)
    server.deserializeClient(auth.deserializeClient)
    // server.grant(grants.code)
    // server.exchange(exchanges.code)
  }

  return server
}



export default { getOauth2Server }