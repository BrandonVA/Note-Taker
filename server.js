const express = require('express');
const path = require('path')

// Creating the app and setting up the port
const app = express();
const PORT = process.env.PORT || 8080;


// Enable app to use data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting up static paths
app.use(express.static(path.join(__dirname, 'public')));

// Importing in the routes for the api program side of the app.
require('./routes/apiRoutes')(app);
// Importing in the routes for the static html links for the client side of the app.
require('./routes/htmlRoutes')(app);

// Listen for a call to see what to do next
app.listen(PORT, ()=> {
    console.log(`Listing at port: ${PORT}`);
})
