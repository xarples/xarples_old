import { ApolloServer } from 'apollo-server'
import utils from '@xarples/utils'

import schema from './schema'

const logger = utils.logger.getLogger('@xarples/accounts')
const server = new ApolloServer({
  schema,
  debug: true
})

if (!module.parent) {
  server.listen({ port: 5000 }).then(({ url }) => {
    logger.info(`Server listening on ${url}`)
  })

  process.on('SIGINT', utils.terminate(0, 'SIGINT'))
  process.on('SIGTERM', utils.terminate(0, 'SIGTERM'))
  process.on('uncaughtException', utils.terminate(1, 'uncaughtException'))
  process.on('unhandledRejection', utils.terminate(1, 'unhandledRejection'))
}

export default server