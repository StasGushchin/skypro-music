import { useState } from "react";
import FilterButton from "../FilterButton/FilterButton";

function Filter() {

const [activeFilter, setActiveFiler] = useState(null);

return (
    <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div className="filter">
          <FilterButton title={"исполнителю"} isOpen={activeFilter === "author"}/>
          <FilterButton title={"году"} isOpen={activeFilter === "year"}/>
          <FilterButton title={"жанру"} isOpen={activeFilter === "style"}/>
        </div>
    </div>
    )
}

export default Filter;