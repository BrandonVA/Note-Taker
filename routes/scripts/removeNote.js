const fs = require('fs');
const path = require('path');

// Function to remove the note based on the id from the given array.
const removeNote = (noteToRemove, array) => {
    // Creates a new array from the given array with the chosen note removed.
    const updatedNotes = array.filter(item => parseInt(item.id) !== parseInt(noteToRemove));
    // Writes the bd file with the newly created array with the note removed (as a string).
    fs.writeFile(path.join(__dirname, '../../db/db.json'), JSON.stringify(updatedNotes),  (err) => {
        if (err) throw err;
    })
    // returns the new array created to be send out to the user.
    return updatedNotes;
}
// Exporting the function.
module.exports = removeNote;