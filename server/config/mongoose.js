 const mongoose = require("mongoose")
 mongoose.Promise = global.Promise

 const URL = "mongodb://localhost/discussion"

 mongoose.connect(URL)

 require('../models/user')