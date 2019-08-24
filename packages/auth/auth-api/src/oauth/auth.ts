import { SerializeClientFunction, DeserializeClientFunction } from 'oauth2orize'

export const serializeClient: SerializeClientFunction = (client, done) => {
  done(null, client.clientId)
}

export const deserializeClient: DeserializeClientFunction = (clientId, done) => {
  // const client = await models.Client.findOne({ clientId }).exec()

  return done(null, {})
}

export default {
  serializeClient,
  deserializeClient
}