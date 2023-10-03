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
              <S.MenuLink href="#">
                Главное
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="#">
                Мой плейлист
              </S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink href="../signin.html">
                Войти
              </S.MenuLink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </>
  )
}

export default BurgerMenu
