const fs = require('fs');
const path = require('path');


let idCounter = 3;

const dbWriteFile = (newData, array) => {

    newData.id = idCounter;
    array.push(newData)
    idCounter ++

    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(array),  (err) => {
        if (err) throw err;
        console.log('added data');
    })
}

module.exports = dbWriteFile