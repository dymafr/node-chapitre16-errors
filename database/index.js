const mongoose = require('mongoose');

mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then(() => {
    console.log('connexion ok !');
  })
  .catch((err) => {
    console.log(err);
  });
