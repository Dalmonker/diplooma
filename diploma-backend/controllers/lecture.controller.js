class LectureController {
  createLecture = (req, res) => {
    const { title, id, blockId } = req.body;
    res.json({ title, id, blockId });
  };

  updateLecture = (req, res) => {
    const { lessonId, title } = req.body;
    res.json({ lessonId, title });
  };

  deleteLecture = (req, res) => {
    const { lessonId } = req.body;
    res.json({ lessonId });
  };
}

module.exports = new LectureController();
