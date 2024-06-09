import { useState } from "react";
import { Input, Button, Box } from "@mui/material";

const AddLesson = ({ addNewLesson }) => {
  const [lesson, setLesson] = useState("");

  const createLesson = () => {
    if (lesson.length === 0) return;

    addNewLesson(lesson);
    setLesson("");
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Input
        sx={{ height: "36px" }}
        placeholder="Название урока"
        value={lesson}
        onChange={(e) => setLesson(e.target.value)}
        type="text"
      />
      <Button
        sx={{ height: "36px" }}
        variant="outlined"
        type="button"
        onClick={createLesson}
      >
        Добавить
      </Button>
    </Box>
  );
};

export default AddLesson;
