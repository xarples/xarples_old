import { ApolloServer } from 'apollo-server'
import { setupDatabase } from '@xarples/accounts-db'
import utils from '@xarples/utils'
import schema from './schema'

const logger = utils.logger.getLogger('@xarples/accounts')
const db = setupDatabase()
const isDev = process.env.NODE_ENV !== 'production'
const server = new ApolloServer({
  schema,
  debug: isDev,

  context: {
    db
  }
})

if (!module.parent) {
  server.listen({ port: 5000 })
    .then(({ url }) => {
      logger.info(`Server listening on ${url}`)
    })
    .catch(err => {
      logger.error(err.message)
      logger.debug({ message: err.stack })
    })

  // @ts-ignore
  process.on('SIGINT', utils.terminate(0, 'SIGINT'))
  // @ts-ignore
  process.on('SIGTERM', utils.terminate(0, 'SIGTERM'))
  // @ts-ignore
  process.on('uncaughtException', utils.terminate(1, 'uncaughtException'))
  // @ts-ignore
  process.on('unhandledRejection', utils.terminate(1, 'unhandledRejection'))
}

export default server