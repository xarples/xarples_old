import { ApolloServer } from 'apollo-server'

import schema from './schema'

const server = new ApolloServer({
  schema,
  debug: true
})

if (!module.parent) {
  (async function main() {
    try {
      const { url } = await server.listen({ port: 5000 })
      console.log(`Server listening on ${url}`)
    } catch (e) {
      console.log(e)
    }
  })()
}

export default server