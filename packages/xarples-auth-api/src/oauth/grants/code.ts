import oauth2orize from 'oauth2orize'

const code = oauth2orize.grant.code(async (client, redirectUri, user, res, done) => {
  try {
    const code = ''
    // const code = utils.getRandomString(16)
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