const { readFile, writeFile } = require('fs');

const util = require('util');

const readFilePromise = util.promisify(readFile);

const writeFilePromise = util.promisify(writeFile);



const start = async () => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf-8');
        const second = await readFilePromise('./content/second.txt', 'utf-8');
        console.log(first, second);
        await writeFilePromise('./content/async1.txt', `This is awesome dude: ${first} ${second}`)
    } catch (error) {
        console.log(error);
    }
}

start()