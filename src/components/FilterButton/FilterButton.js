import React from "react";
import * as S from './FilterButton.styles'

function FilterButton({ title, isOpen, onClick, data }) {
  return (
    <S.MainCenterblock>
      <S.FilterButton className="_btn-text" onClick={onClick}>
        {title}
      </S.FilterButton>
      {isOpen && (
        <S.FilterList style={{position:"absolute", top: "50px"}}>
          <S.FilterListItems>
            {data.map((item, index) => (
              <S.FilterListItem key={index}>
              {item}
              </S.FilterListItem>
            ))}
          </S.FilterListItems>
        </S.FilterList> 
      )}
    </S.MainCenterblock>
  );
}

export default FilterButton;