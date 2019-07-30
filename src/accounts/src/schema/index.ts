import { mergeSchemas } from 'apollo-server'

import * as main from './global'
import * as user from './user'

export default mergeSchemas({
  schemas: [main.typeDefs, user.typeDefs],
  resolvers: [main.resolvers, user.resolvers]
})