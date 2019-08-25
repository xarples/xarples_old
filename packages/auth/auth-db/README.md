# @xarples/auth-db


> Xarples auth db module.


## Usage
```js
import { setupDatabase } from '@xarples/auth-db'

const db = setupDatabase()

db.connect()
  .then(() => {
    db.clients.create({})
  })
  .then(() => {
    db.disconnect()
  })

// do something with config
```