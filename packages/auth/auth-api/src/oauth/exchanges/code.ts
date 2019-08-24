import oauth2orize from 'oauth2orize'

const code = oauth2orize.exchange.code(async (client, code, redirectUri, done) => {
  try {
    // const authCode = await models.AuthorizationCode.findOne({ code }).exec()

    // if (!authCode) {
    //   throw new Error('auth code was not found')
    // }

    // if (client.clientId !== authCode.clientId) {
    //   return done(null)
    // }

    // if (redirectUri !== authCode.redirectUri) {
    //   return done(null)
    // }

    // let accessToken = new models.AccessToken({
    //   token: utils.getRandomString(256),
    //   clientId: authCode.clientId,
    //   userId: authCode.userId,
    //   scope: authCode.scope,
    //   expiresIn: ms('24h')
    // })

    // let refreshToken = new models.RefreshToken({
    //   token: utils.getRandomString(256),
    //   clientId: authCode.clientId,
    //   userId: authCode.userId,
    //   scope: authCode.scope,
    // })

    // accessToken = await accessToken.save()
    // refreshToken = await refreshToken.save()

    const accessToken = ''
    const refreshToken = ''
    const accessTokenExpiresIn = ''
    const idToken = ''

    return done(null, accessToken, refreshToken, {
      expires_in: accessTokenExpiresIn,
      id_token: idToken,
      token_type: 'Bearer'
    })
  } catch (e) {
    return done(e)
  }
})

export default code