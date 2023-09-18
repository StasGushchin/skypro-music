import { useState } from "react";

function MusicStyle() {
    const [value, setValue] = useState('');

    function changeSelect() {
      setValue(event.target.value);
    }
    return (
        <>
        <div>
            <select className="filter__button button-year _btn-text" value={value} onChange={changeSelect}>
                <option className="option">жанру</option>
                <option className="option">Pop</option>
                <option className="option">Rock</option>
                <option className="option">Soul</option>
                <option className="option">Rap</option>
            </select>
         </div>
        </>
    );
}
        
export default MusicStyle;