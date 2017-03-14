const Writable = require('stream').Writable
const fs = require('fs')
class ws extends Writable {
    constructor(options) {
        super(options)
        this.dest = options.dest
    }

    _write(chunk, encoding, callback) {
        if (chunk.toString().indexOf('a') === -1) {
            callback(new Error('chunk is invalid'))
        } else {
            fs.writeFile(this.dest, chunk, () => {
                callback(null)
            })
        }
    }
}
module.exports = ws
