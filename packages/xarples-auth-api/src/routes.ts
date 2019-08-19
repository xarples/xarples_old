import express from 'express'

import oauthMiddlewares from './oauth/middlewares'

const router = express.Router()

router.get('/auth', oauthMiddlewares.authorization, (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Altair</title>
    </head>
    
    <body>
      <p>Hi ${req.oauth2.user.name}</p>
      <p><b>${req.oauth2.client.name}</b> is requesting access to your account.</p>
      <p>Do you approve?</p>
    
      <form action="/authorize/decision" method="post">
        <input name="transaction_id" type="hidden" value="${req.oauth2.transactionID}" />
        <div>
          <input type="submit" value="Allow" id="allow" />
          <input type="submit" value="Deny" name="cancel" id="deny" />
        </div>
      </form>
    </body>
    </html>
  `)
})

router.post('/auth/decision', oauthMiddlewares.decision)
router.post('/token', oauthMiddlewares.token, oauthMiddlewares.errorHandler)
router.post('/revoke', (req, res) => {})
router.get('/certs', (req, res) => {})
router.get('/userinfo', (req, res) => {})
router.get('/.well-known/openid-configuration', (req, res) => {
  res.json({
    'issuer': 'https://accounts.xarples.com',
    'authorization_endpoint': 'https://accounts.xarples.com/v2/auth',
    'token_endpoint': 'https://accounts.xarples.com/token',
    'userinfo_endpoint': 'https://accounts.xarples.com/userinfo',
    'revocation_endpoint': 'https://accounts.xarples.com/revoke',
    'jwks_uri': 'https://accounts.xarples.com/certs',
    'response_types_supported': [
      'code',
      'token',
      'id_token',
      'code token',
      'code id_token',
      'token id_token',
      'code token id_token',
      'none'
    ],
    'subject_types_supported': [
      'public',
      'pairwise'
    ],
    'id_token_signing_alg_values_supported': [
      'RS256'
    ],
    'scopes_supported': [
      'openid',
      'email',
      'profile'
    ],
    'token_endpoint_auth_methods_supported': [
      'client_secret_post',
      'client_secret_basic'
    ],
    'claims_supported': [
      'aud',
      'email',
      'email_verified',
      'exp',
      'family_name',
      'given_name',
      'iat',
      'iss',
      'locale',
      'name',
      'picture',
      'sub'
    ],
    'code_challenge_methods_supported': [
      'plain',
      'S256'
    ]
  })
})

export default router