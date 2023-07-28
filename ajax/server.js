const bodyParser = require('body-parser')
const express = require('express')
const multer = require('multer')
const multer = require('multer')
const app = express()
const porta = 8080

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.listen(porta, () => console.log('OK'))