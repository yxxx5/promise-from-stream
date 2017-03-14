const Writable = require('stream').Writable
module.exports = (stream) => {
    let ev = stream instanceof Writable ? 'finish' : 'end'
    return new Promise((resolve, reject) => {
        stream.on(ev, () => {
            resolve(stream)
        })

        stream.on('error', (err) => {
            reject(err)
        })
    })
}
