# @xarples/accounts-db


> Xarples accounts db module.


## Usage
```js
import db from '@xarples/accounts-db'

db.connect()
  .then(() => {
    db.users.create({})
  })
  .then(() => {
    db.disconnect()
  })

// do something with config
```