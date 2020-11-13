const express = require('express');
const path = require('path')


const app = express();
const PORT = process.env.PORT || 8080;


// enable app to use data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setting up static paths
app.use(express.static(path.join(__dirname, 'public')));




require('./routes/apiRoutes')(app)
require('./routes/htmlRoutes')(app)


app.listen(PORT, ()=> {
    console.log(`Listing at port: ${PORT}`);
})
