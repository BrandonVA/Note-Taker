const fs = require('fs');
const path = require('path');

// Importing the functions used to create and delete notes.
const addNote = require('./scripts/addNote');
const removeNote = require('./scripts/removeNote')

// Reading db file and converting to JSON
const dbRawData = fs.readFileSync(path.join(__dirname, '../db/db.json'));
let dbData = JSON.parse(dbRawData);

// Setting the counter for the notes id
let idCounter = 1;
// If there are already notes created make the id = to the last id + 1
if (dbData.length > 0) { 
     idCounter =  dbData[dbData.length -1 ].id +1
} ;

// Exporting the all of the api routes.
module.exports = app => {

    // Sends out the data form the bd in json
    app.get('/api/notes', (req, res) => {
        res.json(dbData)
    })

    // Accepts data from client and creates a new note.
    app.post('/api/notes', (req, res) => {
        // Creating a obj accepted data
        const newNote = req.body;
        // Setting the id for the note
        newNote.id = idCounter;
        // After setting note adding one to it.
        idCounter++
        // Function call for creating the new note and updating db
        addNote(newNote, dbData)
        // Sending back the newly updated db Data
        res.send(dbData)
    })

    // Takes in an id as a parameter and than deletes the note associated with that id.
    app.delete('/api/notes/:id', (req, res) => {
        // Storing the notes id to delete
        const noteToDelete = req.params.id
        // Creating a new array to store the db with note deleted using the function call. 
        let new_db = removeNote(noteToDelete, dbData);
        // Setting the db data to the newly created array.
        dbData = new_db
        // Sending the new db data to the user with the note deleted.
        res.send(dbData);
    })
}