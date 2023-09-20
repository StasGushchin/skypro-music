import React, { useState } from 'react';
import FilterList from '../FilterList/FilterList';

const FilterButton = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen((prev) => !prev);

    let filterMenu = isOpen ? (
        <FilterList/>
    ) : null
    return (
        <div style={{display: "flex", flexDirection: "column",  position: "relative"}}>
            <div onClick={toggleOpen} className="filter__button button-author _btn-text">
                {props.title}
            </div>
            {filterMenu}
        </div>
    );
};

export default FilterButton;