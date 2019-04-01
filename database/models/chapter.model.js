const mongoose = require('mongoose');
const schema = mongoose.Schema;

const chapterSchema = schema({
  title: { 
    type: String,
    required: [true, 'On doit preciser un titre']
  },
  difficulty: { type: Number },
  nbrOfLesson: { type: Number, required: [true, 'hello'] },
  index: Number,
  active: Boolean,
}, {
  timestamps: true
})

chapterSchema.pre('save', function(){
  return Chapters.countDocuments().exec().then( nbr => this.index = nbr + 1);
})

const Chapters = mongoose.model('chapters', chapterSchema);

module.exports = Chapters;