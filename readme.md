### promise-from-stream
Promisify Readable Writable...Stream, is used for await/async

#### install

    $ npm install --save promise-from-stream

#### Usage

    const pfs = require('promise-from-stream')
    async function d(){
        await pfs(
            new Readable().pipe(
                new Transform
            ).pipe(
                    new Writable({
                        dest: filePath
                    })
                )
        )
        //done
    }
