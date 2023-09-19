import { useState } from "react";

function Filter() {
    const [value, setValue] = useState('');

    function changeSelect() {
      setValue(event.target.value);
    }
    return (
        <ul>
            <li className="menu__item">
                <a href="#" className="menu__link">Главное</a>
            </li>
        </ul>
    );
}
        
export default Filter;