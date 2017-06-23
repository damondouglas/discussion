const mongoose = require("mongoose")
mongoose.Promise = global.Promise
const process = require("process")

const URL = process.env.MONGODB_URL

mongoose.connect(URL)

require('../models/user')
require('../models/topic')