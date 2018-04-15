const mongoose = require("mongoose");
//using the schema from mongoose node module
const Schema = mongoose.Schema;

//create novel schema
const NovelSchema = new Schema({
    origin: {
        type: String,
        required: [true, "Origin is required"]
    },
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    ranking: {
        type: Number,
        required: [true, "Ranking is required"]
    },
    url: {
        type: String,
        required: [true, "Url is required"],
        // add some url validation from the validator.js library
    },
    picSource: {
        type: String,
        required: [true, "PicSource is required"]
    },
    description: {
        type: String,
        required: [false, "Description is required"],
        default: "Description will be added soon."
    }
});

//creating a new model where the novels will be stored, which require the NovelSchema (second parameter)
const Novel = mongoose.model("novel", NovelSchema);

//exporting the model (based on the schema) to use it in other files
module.exports = Novel;
