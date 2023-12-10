import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import ArchivesPage from "./pages/ArchivesPage/ArchivesPage";
import NewNotesPage from "./pages/NewNotesPage/NewNotesPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/notes/:id" element={<DetailPage />} />
      <Route path="/archives" element={<ArchivesPage />} />
      <Route path="/notes/new" element={<NewNotesPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
