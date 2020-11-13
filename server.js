const express = require('express');


const app = express();
const PORT = process.env.PORT || 8080;


// enable app to use data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require('./routes/htmlRoutes')(app)

app.listen(PORT, ()=> {
    console.log(`Listing at port: ${PORT}`);
})