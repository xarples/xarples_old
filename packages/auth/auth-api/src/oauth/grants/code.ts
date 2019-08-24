import oauth2orize from 'oauth2orize'
import { getRandomString } from '@xarples/utils'


const code = oauth2orize.grant.code(async (client, redirectUri, user, res, done) => {
  try {
    const code = getRandomString(10)
    // const authCode = new models.AuthorizationCode({
    //   code,
    //   clientId: client.clientId,
    //   redirectUri,
    //   userId: user.id,
    //   scope: res.scope
    // })

    // await authCode.save()

    return done(null, code);
  } catch (e) {
    return done(e)
  }
})

export default code