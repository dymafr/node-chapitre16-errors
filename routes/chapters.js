const router = require('express').Router();
const { chapterList, chapterDetails, chapterDelete, chapterCreate, addChapter } = require('../controllers/chapter.controller');

router.get('/', chapterList);
router.get('/add', addChapter);
router.get('/:chapterId', chapterDetails);
router.post('/', chapterCreate);
router.get('/delete/:chapterId', chapterDelete);

module.exports = router;