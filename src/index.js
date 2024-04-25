const express = require('express')
const cors = require('cors')
const testData = require('./testData')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/planets', (req, res) => {
  res.status(200).json(testData)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log('App is running on port: ' + PORT))