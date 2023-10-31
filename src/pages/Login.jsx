import { useNavigate } from 'react-router-dom'
import * as S from './Login.styles'

export const Login = ({ setAuth }) => {
const navigate = useNavigate()
  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormLogin action="#">
            <a href="../">
              <S.ModalLogo>
                <img src="../img/logo_modal.png" alt="logo" />
              </S.ModalLogo>
            </a>
            <S.ModalInput
              type="text"
              name="login"
              placeholder="Почта"
            />
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.ModalBtnEnter
              onClick={() => {
              setAuth();
              navigate('/', { replace: false })
            }
            }>Войти
            </S.ModalBtnEnter>
            <S.ModalBtnSignUpNavLink to="/register">
              Зарегистрироваться
            </S.ModalBtnSignUpNavLink>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  )
}

export default Login

// <div>
//       <S.Title>Login</S.Title>
//       <button onClick={() => {
//         setAuth();
//         navigate('/', { replace: false })
//         }
//       }>Войти</button>
//     </div>