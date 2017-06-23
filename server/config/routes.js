const path = require("path")
const users = require('../controllers/users')

module.exports = (app) => {
    app.post('/user/login', users.login)
    app.get('/user/current', users.current)
    app.get("*", (req, res) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    })
}