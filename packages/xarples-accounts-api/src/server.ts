import { ApolloServer } from 'apollo-server'
import utils from '@xarples/utils'
import { setupDatabase } from '@xarples/accounts-db'

import schema from './schema'

const logger = utils.logger.getLogger('@xarples/accounts')
const utilsLogger = utils.logger.getLogger('@xarples/utils')

const server = new ApolloServer({
  schema,
  debug: true,
  context: {
    db: setupDatabase()
  }
})

if (!module.parent) {
  server.listen({ port: 5000 }).then(({ url }) => {
    const db = setupDatabase()

    db.connect().then(() => {
      db.users.findMany().then(users => {
        console.log(users)
      })
    }).catch(err => {
      console.log(err)
      console.log(err.message)
    })

    console.log(process.env.POSTGRES_URL)
    logger.info(`Server listening on ${url}`)
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