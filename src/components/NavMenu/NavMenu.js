import BurgerMenu from "../BurgerMenu/BurgerMenu";

function NavMenu() {
    return (
        <nav className="main__nav nav">
            <div className="nav__logo logo">
              <img className="logo__image" src="img/logo.png" alt="logo" />
            </div>
            <BurgerMenu/>
          </nav>
    );
}
    
export default NavMenu;