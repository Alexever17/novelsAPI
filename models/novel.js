const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create novel schema
const NovelSchema = new Schema({
  origin: {
    type: String,
    required: [true, 'Origin is required']
  },
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  ranking: {
    type: Number,
    required: [true, 'Ranking is required']
  },
  url: {
    type: String,
    required: [true, 'Url is required']
  },
  picSource: {
    type: String,
    required: [true, 'PicSource is required']
  },
  description: {
    type: String,
    required: [false, 'Description is required'],
    default: 'Description will be added soon.'
  }
});

//creating a new model where the novels will be stored, which require the NovelSchema (second parameter)
const Novel = mongoose.model('novel',NovelSchema);

module.exports = Novel;
