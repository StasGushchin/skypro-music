import { Navigate } from 'react-router-dom'
import * as S from './Login.styles'

export const Login = ({ setAuth }) => {
  return (
    <div>
      <S.Title>Login</S.Title>
        <button onClick={() => {
        setAuth;
        Navigate("/", { replace: true })}}>Войти</button>
    </div>
  )
}

export default Login
