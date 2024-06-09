import { useState } from "react";
import styled from "@emotion/styled";
import { Button, ButtonGroup, Checkbox } from "@mui/material";
import { Link } from "react-router-dom";

const views = {
  link: "LINK",
  input: "INPUT",
};

const StyledLesson = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 8px;
  &:nth-child(odd) {
    background-color: aliceblue;
  }
  width: 100%;
`;

const Lesson = ({ lesson }) => {
  const [currentView, setCurrentView] = useState(views.link);

  const toggleView = (e) => {
    e.preventDefault();
    if (currentView === views.link) {
      setCurrentView(views.input);
    } else {
      setCurrentView(views.link);
    }
  };

  if (currentView === views.link) {
    return (
      <StyledLesson to={`/admin/${lesson.slug}`} key={lesson.id}>
        {lesson.title}
        <ButtonGroup>
          <Checkbox />
          <Button sx={{}} variant="default">
            Удалить
          </Button>
          <Button type="button" onClick={toggleView}>
            Изменить
          </Button>
        </ButtonGroup>
      </StyledLesson>
    );
  }
  // в onchaneg надо менять lesson.title, вопрос как?
  return (
    <StyledLesson>
      <input onChange={() => {}} value={lesson.title} />
      <button type="button" onClick={toggleView}>
        eddit
      </button>
    </StyledLesson>
  );
};

export default Lesson;
