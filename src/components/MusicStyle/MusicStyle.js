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
                <option>Pop</option>
                <option>Rock</option>
                <option>Soul</option>
                <option>Rap</option>
            </select>
         </div>
        </>
    );
}
        
export default MusicStyle;