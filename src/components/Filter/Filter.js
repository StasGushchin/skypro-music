import { useState } from "react";
import FilterButton from "../FilterButton/FilterButton";
import { authorItem, genreItem, yearItem } from "../data/data";
import * as S from './Filter.styles'

function Filter() {

const [activeFilter, setActiveFilter] = useState(null);

const selectFilter = (filter) => {
  if (filter === activeFilter) {
    setActiveFilter(null);
  } else {
    setActiveFilter(filter);
  }
}

return (
    <S.CenterBlockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <S.Filter>

          <FilterButton 
            data={authorItem}
            title={"исполнителю"} 
            isOpen={activeFilter === "author"} 
            onClick={() => selectFilter("author")}/>

          <FilterButton 
            data={yearItem}
            title={"году"} 
            isOpen={activeFilter === "year"} 
            onClick={() => selectFilter("year")}/>

          <FilterButton 
            data={genreItem}
            title={"жанру"} 
            isOpen={activeFilter === "genre"} 
            onClick={() => selectFilter("genre")}/>

        </S.Filter>
    </S.CenterBlockFilter>
    )
}

export default Filter;