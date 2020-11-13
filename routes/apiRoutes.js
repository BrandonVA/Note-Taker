const fs = require('fs');
const path = require('path');

module.exports = app => {
    

    app.get('/api/notes', (req, res) => {
        fs.readFile(path.join(__dirname, '../db/db.json'),  (err, data) => {
            if (err) throw err;
            res.json(JSON.parse(data))
        })
    })


}