const { getChapters, getChapter, deleteChapter, createChapter } = require('../queries/chapter.queries');
const createError = require('http-errors');

exports.chapterList = async (req, res, next) => {
  try {
    const chapters = await getChapters();
    res.render('index', { chapters });
  } catch(e) {
    next(e);
  }
};

exports.chapterDetails = async (req, res, next) => {
  try {
    const chapterId = req.params.chapterId;
    const chapter = await getChapter(chapterId);
    if (chapter) {
      res.render('chapter', { chapter });
    } else {
      throw createError(404, 'This chapter doesn\'t exist');
    }
  } catch(e) {
    next(e);
  }
};

exports.chapterDelete = async (req, res, next) => {
  try {
    const chapterId = req.params.chapterId;
    await deleteChapter(chapterId);
    const chapters = await getChapters();
    res.render('index', { chapters });
  } catch(e) {
    next(e);
  }
};

exports.chapterCreate = async (req, res, next) => {
  try {
    await createChapter(req.body);
    res.redirect('/');
  } catch(e) {
    const errors = Object.keys(e.errors).map( key => e.errors[key].message );
    res.status(400).render('form', { errors });
  }
};

exports.addChapter = async (req, res, next) => {
	try {
		res.render('form');
	} catch(e) {
    next(e);
	}
};
