import { useState } from "react";
import FormInput from "../../components/FormInput/FormInput";
import { login, putAccessToken } from "../../utils/network-data";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [modifiedData, setModifiedData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(modifiedData)
    if(!res.error){
      putAccessToken(res.data.accessToken)
      navigate('/')
    }
  };
  return (
    <section className="login-page">
      <h2>Yuk, login untuk menggunakan aplikasi.</h2>
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
        <button type="submit">Login</button>
      </form>
      <p>
        Belum punya akun?
        <a href="/register">Daftar di sini</a>
      </p>
    </section>
  );
};

export default LoginPage;
