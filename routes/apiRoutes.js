const fs = require('fs');
const path = require('path')

module.exports = app => {

    // Testing out how to readFiles and convert to usable data
    fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
        if (err) throw err;
        let notesData = JSON.parse(data);
        console.log(notesData);
    })
}