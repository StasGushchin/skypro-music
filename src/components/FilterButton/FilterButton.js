import React from "react";

function FilterButton({ title, isOpen, onClick, data }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", position: "relative" }}>
      <div className="filter__button button-author _btn-text" onClick={onClick}>
        {title}
      </div>
      {isOpen && (
        <div className="filter-list" style={{position:"absolute", top: "50px"}}>
          <ul
            className="filter-listitems"
          >
            {data.map((item, index) => (
              <li className="filter-listitem" key={index} >
                {item}
                
              </li>
            ))}
          </ul>
        </div> 
      )}
    </div>
  );
}

export default FilterButton;