function getRandomInt (len: number) {
  return Math.floor(Math.random() * len)
}

export default function getRandomString (len: number) {
  const result = []
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const length = chars.length

  for (let i = 0; i < len; ++i) {
    const random = getRandomInt(length)
    const char = chars[random]

    result.push(char)
  }

  return result.join('')
}