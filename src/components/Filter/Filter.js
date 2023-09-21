import { useState } from "react";
import FilterButton from "../FilterButton/FilterButton";
import { authorItem, genreItem, yearItem } from "../data/data";

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
    <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div className="filter">

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

        </div>
    </div>
    )
}

export default Filter;