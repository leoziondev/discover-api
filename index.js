const express = require('express')

const app = express()

// middleware
app.use(express.json())

app.route('/').post((req, res) => {
  res.send(req.body)
})

app.listen('3000')