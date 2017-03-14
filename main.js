const Readable = require('stream').Readable

module.exports = (stream) => {
    let ev = stream instanceof Readable ? 'end' : 'finish'
    return new Promise((resolve, reject) => {
        stream.on(ev, () => {
            resolve(stream)
        })

        stream.on('error', (err) => {
            reject(err)
        })
    })
}
