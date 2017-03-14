const Readable = require('stream').Readable

class rs extends Readable {
    constructor(options) {
        super(options)
        this.n = 0
    }

    _read(size) {
        if (this.n === 5) {
            return this.push(null)
        } else {
            setTimeout(() => {
                this.n += 1
                //console.log(this.n.toString())
                this.push('a' + this.n)

            }, 100)
        }
    }
}

module.exports = rs
