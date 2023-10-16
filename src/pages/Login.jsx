import { useNavigate } from 'react-router-dom'
import * as S from './Login.styles'

export const Login = ({ setAuth }) => {
const navigate = useNavigate()
  return (
    <div>
      <S.Title>Login</S.Title>
      <button onClick={() => {
        setAuth();
        navigate('/', { replace: false })
      }
      }>Войти</button>
    </div>
  )
}

export default Login
