const path = require("path")
const users = require('../controllers/users')
const topics = require('../controllers/topics')

module.exports = (app) => {
    app.post('/user/login', users.login)
    app.get('/user/current', users.current)
    app.get('/user', users.getById)
    app.get('/user/list', users.list)

    app.post('/topic/create', topics.create)
    app.get('/topic/list', topics.list)
    app.get("*", (req, res) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    })
}