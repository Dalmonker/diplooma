import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AdminPage from "../pages/AdminPage";
import AdminLessonPage from "../pages/AdminLessonPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Беларусь</div>} />
      <Route path="/:lesson" element={<MainPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/:lesson" element={<AdminLessonPage />} />
    </Routes>
  );
};

export default App;
