import * as S from './Registration.styles'

export const Registration = () => {
    return (
    <S.Wrapper>
      <S.ContainerSignUp>
        <S.ModalBlock>
          <S.ModalFormLogin>
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
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <S.ModalBtnSignUpEnt>
              <a href="../index.html">Зарегистрироваться</a>
            </S.ModalBtnSignUpEnt>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerSignUp>
    </S.Wrapper>
    );
  }

  export default Registration;