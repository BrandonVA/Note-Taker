const fs = require('fs');
const path = require('path');


const removeNote = (noteToRemove, array) => {

    const updatedNotes = array.filter(item => parseInt(item.id) !== parseInt(noteToRemove));
    
    fs.writeFile(path.join(__dirname, '../../db/db.json'), JSON.stringify(updatedNotes),  (err) => {
        if (err) throw err;
    })
    return updatedNotes;
}

module.exports = removeNote;