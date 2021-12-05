const { readFile, writeFile } = require('fs');



const getText = (path) => {
    return new Promise((resolve, reject) => {

        readFile(path, 'utf-8', (err, result) => {
            if (err) {
                return reject(err)
            }

            else {
                resolve(result)
            }
        })

    })
}

// getText('./content/first.txt').then((data) => console.log(data)).catch((err) => console.log(err));


const startAsync = async () => {
    try {
        const gttxt = await getText('./content/first.txt');
        const gttxtsecond = await getText('./content/second.txt');
        console.log(gttxt);
        console.log(gttxtsecond);
    } catch (error) {
        console.log(error);
    }

}

startAsync()