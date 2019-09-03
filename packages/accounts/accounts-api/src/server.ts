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

async function start () {
  try {
    const { url } = await server.listen({ port: 5000 })

    logger.info(`Server listening on ${url}`)
      // @ts-ignore
    process.on('SIGINT', utils.terminate(0, 'SIGINT'))
    // @ts-ignore
    process.on('SIGTERM', utils.terminate(0, 'SIGTERM'))
    // @ts-ignore
    process.on('uncaughtException', utils.terminate(1, 'uncaughtException'))
    // @ts-ignore
    process.on('unhandledRejection', utils.terminate(1, 'unhandledRejection'))
  } catch (e) {
    logger.error(e.message)
    logger.debug({ message: e.stack })
  }
}

if (!module.parent) {
  start()
}

export default server