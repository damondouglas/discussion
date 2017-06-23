const mongoose = require("mongoose")

const TopicSchema = mongoose.Schema({
	title: {type: String, required: true},
	description: {type: String, required: true},
	user_id: {type: String, required: true},
	category: {type: String, required: true},
}, {timestamps: true})

mongoose.model("Topic", TopicSchema)