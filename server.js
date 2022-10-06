// Initialization
const express = require('express')
const bcrypt = require('bcryptjs')

const app = express()
const port = 3000
const salt = bcrypt.genSaltSync(10);
const password = 'Hello, world'
const hash = bcrypt.hashSync(password, salt);

console.log(hash)

app.use(express.json({}))
app.use(express.urlencoded())

const DB = {
  users: [],
  admin: [],
}


// Get User function
function getUser(req, res) {
  // res.send('Just Tested the GET Request!')
  res.status(200).json({ status: 'OK', data: DB.users })
}

// To check if the user exists in the database
function createUser(req, res) {
  const newUser = req.body
  // Logic for creating a new user
  // DB.users.push(user)

  const user = DB.users.findIndex(user => {
    return user.email === newUser.email
  });

  if(user > -1){
    res.status(400).json({
      success: false,
      message: 'User already exists',
    })
  }else{
    // Adding the password
    const passwordHash = bcrypt.hashSync(newUser.password, salt)
    newUser.password = passwordHash // Encrypting the password with the salt
    
    DB.users.push(newUser);

    res.status(201).json({ success: true, message: 'User Created Successfully' })
  }
}


// ADMIN CLASSWORK
function getAdmin(req, res) {
  res.status(200).json({ status: 'success', data: DB.admin })
}

function createAdmin(req, res) {
  const admin = req.body
  DB.admin.push(admin)
  res.status(200).json({ status: 'success', data: 'Admin Created Successfully' })
}


// Using the GET request method
app.get('/user', getUser)
app.get('/admin', getAdmin)

// POST request 
app.post('/user', createUser)
app.post('/admin', createAdmin)


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
