const Readable = require('stream').Readable
const Writable = require('stream').Writable
module.exports = (stream) => {
    let ev = 'close';
    if (stream instanceof Readable) {
        ev = 'end'
    } else if (stream instanceof Writable) {
        ev = 'finish'
    }

    return new Promise((resolve, reject) => {
        stream.on(ev, () => {
            resolve(stream)
        })

        stream.on('error', (err) => {
            reject(err)
        })
    })
}
