const express = require('express')

const app = express()

app.route('/').get((req, res) => {
  // localhost:3000?name=Jhon Doe
  res.send(req.query)
  // res.send(req.query.name)
})

app.listen('3000')