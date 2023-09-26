import React from "react";
import * as S from './FilterButton.styles'

function FilterButton({ title, isOpen, onClick, data }) {
  return (
    <S.MainCenterblock
      >
      <S.FilterButton className="filter__button button-author _btn-text" onClick={onClick}>
        {title}
      </S.FilterButton>
      {isOpen && (
        <div className="filter-list" style={{position:"absolute", top: "50px"}}>
          <S.FilterListItems>
            {data.map((item, index) => (
              <S.FilterListItem key={index}>
              {item}
              </S.FilterListItem>
            ))}
          </S.FilterListItems>
        </div> 
      )}
    </S.MainCenterblock>
  );
}

export default FilterButton;