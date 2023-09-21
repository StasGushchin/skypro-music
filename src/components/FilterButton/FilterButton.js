import React from "react";
import Link from "react-router-dom"

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
              <Link className="filter-listitem" key={index} to="#">
                {item}
              </Link>
            ))}
          </ul>
        </div> 
      )}
    </div>
  );
}

export default FilterButton;