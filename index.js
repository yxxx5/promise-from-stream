module.exports = (stream) => {
  return new Promise((resolve, reject) => {
      stream.on('end', () => {
        resolve(stream)
      })
      stream.on('error', (err) => {
        reject(err)
      })
  })
}
