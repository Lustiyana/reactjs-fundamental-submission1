import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/auth";
import LanguageContext from "../../contexts/language";
import { TRANSLATE } from "../../constants/lang";
import ThemeContext from "../../contexts/theme";
import { getUserLogged } from "../../utils/network-data";
import { Icon } from '@iconify/react';
import { THEME_ICON } from "../../constants/icon";

const Navbar = () => {
  const { token, setToken } = useContext(AuthContext);
  const { lang, toggleLang } = useContext(LanguageContext);
  const { theme,toggleTheme } = useContext(ThemeContext);
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const handleLogout = () => {
    setToken(null);
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getUserLogged();
      setUser(res.data);
    };
    fetchData();
  }, [token]);


  return (
    <>
      <h1>
        <Link to="/">{TRANSLATE[lang].titleApp}</Link>
      </h1>
      <nav className="navigation">
        <ul>
          {token && (
            <li>
              <Link to="/archives">{TRANSLATE[lang].headerArchive}</Link>
            </li>
          )}
        </ul>
      </nav>
      <button className="toggle-locale" onClick={toggleLang}><Icon icon="material-symbols:g-translate" /></button>
      <button className="toggle-theme" onClick={toggleTheme}><Icon icon={`tabler:sun-filled`} /></button>
      {token && (
        <button className="button-logout" onClick={handleLogout}>
          <Icon icon="mdi:logout" />{" "}
          {user?.name}
        </button>
      )}
    </>
  );
};
export default Navbar;
