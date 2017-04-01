const Transform = require('stream').Transform

class ts extends Transform {
    constructor(options) {
        super(options)
    }

    _transform(chunk, encoding, callback) {
        setTimeout(() => {
            callback(null, chunk)
        }, 500)
    }
}
module.exports = ts
