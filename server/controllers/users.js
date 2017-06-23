const mongoose = require("mongoose")
const User = mongoose.model("User")
const async = require("asyncawait/async")
const await = require("asyncawait/await")

const user = {
   current: (req, res) => {
       if (req.session.user_id) {
           res.json(req.session.user_id)
       } else {
           res.json(null)
       }
   },
   login: async (
       (req, res) => {
           let name = req.body.name
           if (!name) {
               res.status(401).json("missing name")
           }
           try {
            let user = await ( User.findOne({name: name}) )
            if (!user) {
                user = new User({
                    name: name
                })
                await (
                    user.save()
                )
            }
            req.session.user_id = user._id
            res.json(user)
           } catch(e) {
               res.status(500).json(e)
           }
       }
   )
}

module.exports = user