import { NavLink } from 'react-router-dom';
import * as S from './Login.styles'


export const Login = ({setAuth}) => {
  
    return (
      <div>
        <S.Title>Login</S.Title>
        
        <button 
        onClick={
          setAuth
        }
        >Войти</button>
        
      </div>
    );
  }

  export default Login;