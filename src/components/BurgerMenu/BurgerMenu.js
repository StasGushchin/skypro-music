import { useState } from "react";

function BurgerMenu() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible((prev) => !prev);
    return (
        <>
            <div onClick={toggleVisibility} className="nav__burger burger">
              <span className="burger__line"></span>
              <span className="burger__line"></span>
              <span className="burger__line"></span>
            </div>
            {isVisible && (
            <div className="nav__menu menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <a href="#" className="menu__link">Главное</a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">Мой плейлист</a>
                </li>
                <li className="menu__item">
                  <a href="../signin.html" className="menu__link">Войти</a>
                </li>
              </ul>
            </div>
            )}
        </>
    );
}
    
export default BurgerMenu;