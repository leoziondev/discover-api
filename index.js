const express = require('express')

const app = express()

app.route('/:id').delete((req, res) => {
  res.send(req.params.id)
})

app.listen('3000')