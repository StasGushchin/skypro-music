import { useNavigate } from 'react-router-dom';
import * as S from './Login.styles'

export const Login = () => {
  const handleSignIn = () => {
    localStorage.setItem("user", "true");
  };
  const navigate = useNavigate();
    return (
      <div>
        <S.Title>Login</S.Title>
        <button 
        onClick={() => {
          handleSignIn();
          navigate("/", { replace: false });
        }}
        >Войти</button>
      </div>
    );
  }

  export default Login;