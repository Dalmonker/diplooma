import React from "react";
import AddLecture from "../admin/lessonContent/AddLecture";
import AddTest from "../admin/lessonContent/AddTest";
import { Link } from "@mui/material";

const AdminLessonPage = () => {
  return (
    <div>
      <Link to="/admin">Назад</Link>
      <AddLecture />
      <AddTest />
    </div>
  );
};

export default AdminLessonPage;
