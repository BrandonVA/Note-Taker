const fs = require('fs');
const path = require('path');

const addNote = require('./scripts/addNote');
const removeNote = require('./scripts/removeNote')

// Reading db file and converting to JSON
const dbRawData = fs.readFileSync(path.join(__dirname, '../db/db.json'));
let dbData = JSON.parse(dbRawData);


let idCounter = 1;

if (dbData.length > 0) { 
     idCounter =  dbData[dbData.length -1 ].id +1
} ;

module.exports = app => {

    

    app.get('/api/notes', (req, res) => {
        res.json(dbData)
    })

    app.post('/api/notes', (req, res) => {
        const newNote = req.body;
        newNote.id = idCounter;

        idCounter++
        addNote(newNote, dbData)
        res.send(dbData)
    })

    app.delete('/api/notes/:id', (req, res) => {

        const noteToDelete = req.params.id
        let new_db = removeNote(noteToDelete, dbData);
        dbData = new_db
        res.send(dbData);

    })


}