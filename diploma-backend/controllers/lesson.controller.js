const data = require("../data/data.js");

class LessonController {
  getLesson = (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "origin, content-type, accept"
    );

    const lesson = data.lessons.find(
      (lesson) => lesson.slug === req.params.lesson
    );
    setTimeout(() => {
      if (lesson) {
        res.json(lesson.blocks);
      } else {
        res.json([]);
      }
    }, 1000);
  };

  createLesson = (req, res) => {
    const { title, id, blockId } = req.body;
    res.json({ title, id, blockId });
  };

  updateLesson = (req, res) => {
    const { lessonId, title } = req.body;
    res.json({ lessonId, title });
  };

  deleteLesson = (req, res) => {
    const { lessonId } = req.body;
    res.json({ lessonId });
  };
}

module.exports = new LessonController();
