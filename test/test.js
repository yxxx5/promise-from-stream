const pfs = require('../main')
//const contentstream = require('contentstream')
const fs = require('fs')
//const assert = require('assert')
const rimraf = require('rimraf').sync
const rs = require('./lib/rs')
const ts = require('./lib/ts')
const ws = require('./lib/ws')
const filePath = process.cwd() + '/test/test.txt'

test('async pipe', async() => {
    await pfs(new rs().pipe(new ts).pipe(new ws({
        dest: filePath
    })))

    expect(fs.readFileSync(filePath, {
        encoding: 'utf-8'
    })).toBe('a5')
    rimraf(filePath)
})
