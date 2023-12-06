import React from "react";
import { getAllNotes } from "./utils/local-data";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage";
import DetailPage from "./pages/DetailPage/DetailPage";
import ArchivesPage from "./pages/ArchivesPage/ArchivesPage";
import NewNotesPage from "./pages/NewNotesPage/NewNotesPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";


function App() {
  return (
    <div className="app-container">
      <header>
        <h1><Link to="/">Aplikasi Catatan</Link></h1>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/archives">Arsip</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/notes/:id" element={<DetailPage/>}/>
          <Route path="/archives" element={<ArchivesPage/>}/>
          <Route path="/notes/new" element={<NewNotesPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
