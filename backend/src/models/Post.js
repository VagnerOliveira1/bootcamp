const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({// representa a tabela do banco de dados em formato de JS
  author: String,
  place: String,
  description: String,
  hashtags: String,
  image: String,
  likes:{
    type: Number,
    default:0,
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Post', PostSchema);
