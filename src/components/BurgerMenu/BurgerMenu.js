import { useState } from 'react'
import * as S from './BurgerMenu.styles'

function BurgerMenu() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible((prev) => !prev)
  return (
    <>
      <S.NavBurger onClick={toggleVisibility}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.NavBurger>
      {isVisible && (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <S.NewNavLink to="/">
                Главное
              </S.NewNavLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.NewNavLink to="/favorites">
                Мой плейлист
              </S.NewNavLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.NewNavLink to="/login">
                Войти
              </S.NewNavLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </>
  )
}

export default BurgerMenu
