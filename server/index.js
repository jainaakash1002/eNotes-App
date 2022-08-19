const connectToMongo = require('./db');
require('dotenv').config();
const express = require('express')
var cors = require('cors') 

connectToMongo();
const app = express()
const port = process.env.PORT || 5000; 

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`eNotes backend is listening at http://localhost:${port}`)
})