const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:admin@boilerplate.w3ircbo.mongodb.net/?retryWrites=true&w=majority', {
    // useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('Mongo DB Connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//npm run start -> localhost:3000