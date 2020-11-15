const fs = require('fs');
const path = require('path');

const dbWriteFile = (newData, array) => {

    array.push(newData)

    fs.writeFile(path.join(__dirname, '../../db/db.json'), JSON.stringify(array),  (err) => {
        if (err) throw err;
        console.log('added data');
    })
}

module.exports = dbWriteFile