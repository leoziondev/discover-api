const express = require('express')

const app = express()

app.use(express.json())

let author = "Jhon Doe"

app.route('/').get((req, res) => res.send(author))

app.route('/').put((req, res) => {
  author = req.body.author
  res.send(author)
})

app.listen('3000')