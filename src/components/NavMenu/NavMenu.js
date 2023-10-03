import BurgerMenu from "../BurgerMenu/BurgerMenu";
import * as S from './NavMenu.styles'

function NavMenu() {
    return (
        <S.MainNav>
          <S.NavLogo>
            <S.LogoImage src="img/logo.png" alt="logo" />
          </S.NavLogo>
          <BurgerMenu/>
        </S.MainNav>
    );
}
    
export default NavMenu;