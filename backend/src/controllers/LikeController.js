const Post = require('../models/Post');

module.exports ={
  async store(req, res){
    const post = await Post.findById(req.params.id);

    post.likes += 1; //adiciona os likes

    await post.save();


    req.io.emit('like',post);// emite a informação like dentro de post

    return res.json(post);
  },


};
