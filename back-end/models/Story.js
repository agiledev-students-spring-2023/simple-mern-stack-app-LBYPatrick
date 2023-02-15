const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storySchema = new Schema(
    {
        storyId: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

// create mongoose Model
const Story = mongoose.model('Story', storySchema)

// export the model so other modules can import it
module.exports = {
    Story,
}