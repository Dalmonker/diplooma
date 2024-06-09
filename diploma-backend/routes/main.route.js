const express = require("express");
const router = express.Router();
const lessonController = require("../controllers/lesson.controller.js");
const navigationController = require("../controllers/navigation.controller.js");

router.get("/navigation", navigationController.getAllLinks);

router.get("/lessons/:lesson", lessonController.getLesson);
router.post("/lesson", lessonController.createLesson);
router.delete("/lesson", lessonController.deleteLesson);
router.put("/lesson", lessonController.deleteLesson);

module.exports = router;
