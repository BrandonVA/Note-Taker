const path = require('path');

// Exporting all the static html routes.
module.exports = app => {

    // Sends out the notes html page.
    app.get(`/notes`, (req, res) =>{
        res.sendFile(path.join(__dirname, '../public/notes.html'))
    })
    // Sets the default page to land on the index.html file.
    app.get("*", (req, res) =>{
        res.sendFile(path.join(__dirname, '../public/index.html'))
    })

}