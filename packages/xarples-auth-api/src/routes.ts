import express from 'express'

const router = express.Router()

router.get('/certs', (req, res) => {
  res.json({})
})

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