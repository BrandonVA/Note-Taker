const fs = require('fs');
const path = require('path');

const addNote = require('./addNote');
const removeNote = require('./removeNote')

// Reading db file and converting to JSON
const dbRawData = fs.readFileSync(path.join(__dirname, '../db/db.json'));
let dbData = JSON.parse(dbRawData);


console.log(dbData.length);

let idCounter = 1;

if (dbData.length > 0) { 
     idCounter =  dbData[dbData.length -1 ].id +1
} ;

let cache = '[{"title":"Test Title","text":"Test text","id":1},{"title":"Test Title2","text":"Test text2","id":2},{"title":"note 3","text":"hello ","id":3},{"title":"note 4","text":"this is the number 4 ","id":4}]'

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

        // console.log(`This is the note ID: ${noteToDelete}`);

        // const updatedNotes = dbData.filter(item => parseInt(item.id) !== parseInt(noteToDelete))

        // console.log(updatedNotes);
    })


}