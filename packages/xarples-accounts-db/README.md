# @xarples/accounts-db


> Xarples accounts db module.


## Usage
```js
import setupDatabase from '@xarples/accounts-db'

const db = setupDatabase()

db.connect()
  .then(() => {
    db.users.create({})
  })
  .then(() => {
    db.disconnect()
  })

// do something with config
```