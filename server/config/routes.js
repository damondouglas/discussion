const users = require('../controllers/users')

module.exports = (app) => {
    app.post('/user/login', users.login)
    app.get('/user/current', users.current)
}