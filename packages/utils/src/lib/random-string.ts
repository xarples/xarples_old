import crypto from 'crypto'

export default function getRandomString (len: number) {
  return crypto.randomBytes(len).toString('hex')
}