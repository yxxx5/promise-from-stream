const pfs = require('../main')
const http = require('http')
const Readable = require('stream').Readable
const cp = require('child_process')
const fs = require('fs')
const trim = require('trim')
const rimraf = require('rimraf').sync
const rs = require('./lib/rs')
const ts = require('./lib/ts')
const ws = require('./lib/ws')
const wsPath = process.cwd() + '/test/ws.txt'
const rsPath = process.cwd() + '/test/rs.txt'
test('async pipe', async() => {
    await pfs(new rs().pipe(new ts).pipe(new ws({
        dest: wsPath
    })))
    expect(wsText(wsPath), 'a5')
    rimraf(wsPath)
})

test('stream ws', async() => {
    let rs = fs.createReadStream(rsPath)
    let ws = fs.createWriteStream(wsPath)
    setTimeout(() => {
        rs.pipe(ws)
    }, 200)
    await pfs(ws)
    let text = wsText(wsPath)
    expect(trim(text)).toBe('123555')
    rimraf(wsPath)
})

test('stream rs', async() => {
    let rs = fs.createReadStream(rsPath)
    let ws = fs.createWriteStream(wsPath)
    let n = 1
    setTimeout(() => {
        rs.pipe(ws)
        n = 2
    }, 200)

    let stream = await pfs(rs)
    expect(stream).toBeInstanceOf(Readable)
    expect(n).toBe(2)
    rimraf(wsPath)
})



function wsText(path) {
    return fs.readFileSync(path, {
        encoding: 'utf-8'
    })
}
