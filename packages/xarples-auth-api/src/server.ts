import express from 'express'

const app = express()

app.get('/auth', (req, res) => {})
app.post('/auth/decision', (req, res) => {})
app.post('/token', (req, res) => {})
app.get('/revoke', (req, res) => {})
app.get('/userinfo', (req, res) => {})
app.get('/certs', (req, res) => {})
app.get('/.well-known/openid-configuration', (req, res) => {})

app.listen(5001, () => {})