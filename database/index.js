const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://alex:qwe@cluster0-l4izx.gcp.mongodb.net/test?retryWrites=true'
  )
  .then(() => {
    console.log('connexion ok !');
  })
  .catch((err) => {
    console.log(err);
  });
