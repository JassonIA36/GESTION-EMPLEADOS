const mongoose = require('mongoose');

const URI = 'mongodb+srv://j1045683385_db_user:8g7tLFbfBs8iVFKS@cluster0.zixaulb.mongodb.net/empleados?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(URI)
  .then(() => console.log('DB is connected'))
  .catch(err => console.error(err));

module.exports = mongoose;