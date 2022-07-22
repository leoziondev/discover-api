const express = require('express')

const app = express()

app.route('/').get((req, res) => {
  res.send("Home Page")
})

app.route('/about').get((req, res) => {
  res.send("About Page")
})

app.listen('3000')