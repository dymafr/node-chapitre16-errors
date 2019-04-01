const express = require('express');
const chapterRoutes = require('./chapters');

const router = express.Router();

router.use('/chapters', chapterRoutes);

router.get('/',  (req, res) => {
  res.redirect('/chapters');
});

module.exports = router;