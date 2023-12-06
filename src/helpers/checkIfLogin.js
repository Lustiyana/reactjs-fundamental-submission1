import { useNavigate } from "react-router-dom"

export const checkIfLogin = (token) => {
  const navigate = useNavigate()
  if(token){
    navigate('/')
  } else {
    navigate('/login')
  }
}