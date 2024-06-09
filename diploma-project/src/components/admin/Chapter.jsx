import { useState } from "react";
import AddLesson from "./AddLesson";
import Lesson from "./Lesson";
import { Box, Checkbox, Input, List } from "@mui/material";
import { Block } from "../UI";

/**
 * @todo Сделать компонент урока, при нажатии на edit его можно редактировать
 * а так чтобы он был ссылкой
 * @returns
 */

const Chapter = () => {
  /** название главы */
  const [chapterName, setChapterName] = useState("");
  /** уроки */
  const [lessons, setLessons] = useState([]);

  /**
   *  Функция которая добавлять новый урок
   * @param {string} title - Название урока
   */
  const addNewLesson = (title = "") => {
    const lesson = {
      title: title,
      id: Math.random(),
      slug: title,
    };

    setLessons([...lessons, lesson]);
  };

  const changeLessonTitle = (id, title) => {
    setLessons((lessons) => {
      return lessons.map((lesson) => lesson);
    });
  };

  return (
    <Block>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Input
          type="text"
          placeholder="Название главы"
          value={chapterName}
          onChange={(e) => setChapterName(e.target.value)}
        />
        <Checkbox />
      </Box>

      <List>
        {lessons.map((lesson) => (
          <Lesson lesson={lesson} key={lesson.id} />
        ))}
      </List>

      <AddLesson addNewLesson={addNewLesson} />
    </Block>
  );
};

export default Chapter;
