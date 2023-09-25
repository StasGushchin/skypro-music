import { useState } from "react";

function Year() {
    const [value, setValue] = useState('');

    function changeSelect() {
      setValue(event.target.value);
    }
    return (
        <>
        <div>
            <select className="filter__button button-year _btn-text" value={value} onChange={changeSelect}>
                <option className="option">году выпуска</option>
                <option className="option">1992</option>
                <option className="option">1995</option>
                <option className="option">1997</option>
                <option className="option">2000</option>
            </select>
         </div>
        </>
    );
}
        
export default Year;