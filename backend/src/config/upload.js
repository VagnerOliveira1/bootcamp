const multer = require('multer');
const path = require('path');

module.exports = {
  storage: new multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),//configuração do local e nome do arquivo
    filename: function(req, file, callback){
      callback(null, file.originalname);
    }
  })
};
