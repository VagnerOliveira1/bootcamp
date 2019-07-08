const express = require('express');
const multer = require('multer'); // configuiração de imagem e insominia
const uploadConfig = require('./config/upload')

const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router();
const upload = multer(uploadConfig);


routes.get('/posts',PostController.index);// rota de post do feed
routes.post('/posts', upload.single('image'), PostController.store);
routes.post('/posts/:id/like', LikeController.store); // rota que permite likes

module.exports = routes;
