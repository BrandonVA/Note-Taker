const fs = require('fs');
const path = require('path');


const removeNote = (noteToRemove, array) => {
    
    console.log(`This is the note ID: ${noteToRemove}`);

    const updatedNotes = array.filter(item => parseInt(item.id) !== parseInt(noteToRemove));
    

    console.log(updatedNotes);
    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(updatedNotes),  (err) => {
        if (err) throw err;
        console.log('Data removed');
    })
    return updatedNotes;
}

module.exports = removeNote;