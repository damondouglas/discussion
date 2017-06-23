const mongoose = require("mongoose")
const Topic = mongoose.model("Topic")
const async = require("asyncawait/async")
const await = require("asyncawait/await")
const users = require("./users")

const topic = {
    create:  async (
        (req, res) => {
            let user_id = req.session.user_id
            let title = req.body.title
            let description = req.body.description
            let category = req.body.category
            if (user_id && title && description) {
                let topic = new Topic({
                    "title": title,
                    "description": description,
                    "user_id": user_id,
                    "category": category
                })

                try {
                    await ( topic.save() )
                    res.json(topic)
                } catch(e) {
                    res.status(500).json(e)
                }
            } else {
                res.status(401).json("missing title, description, or user_id")
            }
        }
    ),
    list: async (
        (req, res) => {
            try {
                let topics = await (
                    Topic.find()
                )
                res.json(topics)
            } catch(e) {
                res.status(500).json(e)
            }
        }
    )
}

module.exports = topic