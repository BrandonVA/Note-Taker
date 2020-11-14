const fs = require('fs');
const path = require('path');

const addNote = require('./addNote')

// Reading file and converting to JSON
const dbRawData = fs.readFileSync(path.join(__dirname, '../db/db.json'));
const dbData = JSON.parse(dbRawData);


module.exports = app => {

    

    app.get('/api/notes', (req, res) => {
        res.json(dbData)
    })

    app.post('/api/notes', (req, res) => {
        const newNote = req.body;
        addNote(newNote, dbData)
        res.send(dbData)
    })

    // app.post('/api/notes', (req, res) => {

    // })


}