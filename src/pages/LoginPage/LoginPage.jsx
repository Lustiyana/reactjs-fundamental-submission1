import { useContext, useEffect, useState } from "react";
import FormInput from "../../components/FormInput/FormInput";
import { login, putAccessToken } from "../../utils/network-data";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/auth";
import { TRANSLATE } from "../../constants/lang";
import LanguageContext from "../../contexts/language";

const LoginPage = () => {
  const [modifiedData, setModifiedData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const {token, setToken} = useContext(AuthContext)
  const {lang} = useContext(LanguageContext)
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    if(token){
      navigate(-1)
    }
  }, [token])
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try{
      const res = await login(modifiedData)
      if(!res.error){
        putAccessToken(res.data.accessToken)
        setToken(res.data.accessToken)
        navigate('/')
      }
      setLoading(false)
    } catch(err){
      alert(err)
      setLoading(false)
    }
  };

  return (
    <section className="login-page">
      <h2>{TRANSLATE[lang].loginTitle}</h2>
      <form className="input-login" onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          value={modifiedData.email}
          onChange={(e) =>
            setModifiedData({ ...modifiedData, email: e.target.value })
          }
        />
        <FormInput
          label="Password"
          type="password"
          value={modifiedData.password}
          onChange={(e) =>
            setModifiedData({ ...modifiedData, password: e.target.value })
          }
        />
        <button type="submit">{loading ? 'Loading...' : 'Login'}</button>
      </form>
      <p>
        {TRANSLATE[lang].footerLogin}
        <a href="/register">{TRANSLATE[lang].registerLink}</a>
      </p>
    </section>
  );
};

export default LoginPage;
