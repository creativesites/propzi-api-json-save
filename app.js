const express = require("express")
const bodyParser = require("body-parser")
const jsonfile = require('jsonfile')
var random = require('random-name')
const app = express()
const PORT = 9000
app.use(bodyParser.json())

app.post("/save", (req, res) => {
  console.log(req.body) 
  let propData = req.body
  const file = `./data/${random.first()}.json`
        jsonfile.writeFile(file, propData)
        .then(res => {
            console.log('Write complete')
        })
        .catch(error => console.error(error))
  res.status(200).end() 
})
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))