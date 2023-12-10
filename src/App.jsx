import React, { useEffect, useMemo, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import ArchivesPage from "./pages/ArchivesPage/ArchivesPage";
import NewNotesPage from "./pages/NewNotesPage/NewNotesPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { getAccessToken, getLanguage, getTheme } from "./utils/network-data";
import Navbar from "./components/Navbar/Navbar";
import ThemeContext from "./contexts/theme";
import AuthContext from "./contexts/auth";
import LanguageContext from "./contexts/language";

function App() {
  const [theme, setTheme] = useState(getTheme());
  const [token, setToken] = useState(getAccessToken());
  const [lang, setLang] = useState(getLanguage());
  const navigate = useNavigate()
  const unprotectedRoute = ['/login', '/register']
  const location = useLocation();
   

  const authContextValue = useMemo(() => {
    return { token, setToken };
  }, [token]);
    
  const themeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme: () => {
        setTheme((prev) => {
          if (prev === "light") {
            localStorage.setItem("theme", "dark");
            return "dark";
          } else {
            localStorage.setItem("theme", "light");
            return "light";
          }
        });
      },
    };
  });
  const languageContextValue = useMemo(() => {
    return {
      lang,
      toggleLang: () => {
        setLang((prev) => {
          if (prev === "id") {
            localStorage.setItem("lang", "en");
            return "en";
          } else {
            localStorage.setItem("lang", "id");
            return "id";
          }
        });
      },
    };
  });

  useEffect(()=>{
    if(!token && !unprotectedRoute.includes(location.pathname)){
      navigate('/login')
    }
  }, [token])

  useEffect(()=>{
    if(getTheme()){
      document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'))
    }
  }, [theme])

  

  return (
    <AuthContext.Provider value={authContextValue}>
      <ThemeContext.Provider value={themeContextValue}>
        <LanguageContext.Provider value={languageContextValue}>
          <div className="app-container">
            <header>
              <Navbar />
            </header>
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/notes/:id" element={<DetailPage />} />
                <Route path="/archives" element={<ArchivesPage />} />
                <Route path="/notes/new" element={<NewNotesPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>
          </div>
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
