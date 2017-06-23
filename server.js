const process = require("process")
const express = require("express")
const path = require("path")

const app = express()
const bodyParser = require("body-parser")
const session = require("express-session")

if (!process.env['SESSION_SECRET']) {
    console.log("SESSION_SECRET environment variable not set")
    process.exit(0)
}

const PORT = 8000

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "./client/dist")))

app.use(session({
	secret: process.env['SESSION_SECRET'],
	resave: false,
	saveUninitialized: true
}))

require("./server/config/mongoose.js")

require("./server/config/routes.js")(app)

module.exports = app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})

