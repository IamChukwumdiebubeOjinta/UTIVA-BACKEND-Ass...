// Initialization
const express = require('express')
const app = express()
const port = 3000


// Using the GET request method
app.get('/', (req, res) => {
  res.send('Just Tested the GET Request!')
})

// POST request 
app.post('/post-test', (req, res) => {
  res.send('Got a POST request')
  // console.log('Got body:', req.body);
  // res.sendStatus(200);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})