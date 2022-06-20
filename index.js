const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');


//db connection
const db = require('./config/dbConfig');
//below: checks if connection is successful then returns promise
db.authenticate().then(()=>{
    console.log('Database connected...');
}).catch(err =>{
    console.log('Error', err);
})

const app = express();

app.use(bodyParser.json({ limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended:true, limit: '50mb' }));
app.use(cors("*"));

const PORT = process.env.PORT || 5000;


app.use('/', require('./routes/gigRoutes'));


//db.sync updates db with new changes
db.sync().then(()=>{
    app.listen(PORT, console.log(`Server running on port ${PORT}`))
}).catch(err => console.log('Error:', err))

