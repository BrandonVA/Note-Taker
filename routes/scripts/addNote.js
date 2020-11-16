const fs = require('fs');
const path = require('path');


// Function to accept data as an object than append it to the chosen array;
const dbWriteFile = (newData, array) => {
    // Pushes the new data the array accepted.
    array.push(newData);
    // Writes the file for the database using the array with the new data (writing file as a string).
    fs.writeFile(path.join(__dirname, '../../db/db.json'), JSON.stringify(array),  (err) => {
        if (err) throw err;
        console.log('added data');
    })
}
// Exporting function.
module.exports = dbWriteFile