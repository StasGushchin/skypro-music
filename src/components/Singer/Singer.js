import { useState } from "react";

function Singer() {
    const [value, setValue] = useState('');

    function changeSelect() {
      setValue(event.target.value);
    }
    return (
        <>
        <div>
            <select className="filter__button button-year _btn-text" value={value} onChange={changeSelect}>
                <option className="option">исполнителю</option>
                <option>Nero</option>
                <option>Dynoro, Outwork, Mr. Gee</option>
                <option>Ali Bakgor</option>
                <option>Стоункат, Psychopath</option>
            </select>
         </div>
        </>
    );
}
        
export default Singer;