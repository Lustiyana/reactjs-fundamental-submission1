import { useState } from "react";
import FormInput from "../../components/FormInput/FormInput";
import { register } from "../../utils/network-data";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [modifiedData, setModifiedData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (modifiedData.password === modifiedData.confirmPassword) {
      const res = await register(modifiedData);
      if(!res.error){
        navigate('/login')
      }
      console.log(res)
    } else {
      alert("Password tidak sama");
    }
  };

  return (
    <section className="regsiter-page">
      <h2>Isi form untuk mendaftar akun.</h2>
      <form className="input-register" onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          type="text"
          value={modifiedData.name}
          onChange={(e) =>
            setModifiedData({ ...modifiedData, name: e.target.value })
          }
        />
        <FormInput
          label="Email"
          type="text"
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
        <FormInput
          label="Confirm Password"
          type="password"
          value={modifiedData.confirmPassword}
          onChange={(e) =>
            setModifiedData({
              ...modifiedData,
              confirmPassword: e.target.value,
            })
          }
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Sudah punya akun?
        <a href="/login">Masuk di sini</a>
      </p>
    </section>
  );
};

export default RegisterPage;
