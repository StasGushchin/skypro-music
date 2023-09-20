function FilterList() {

return (
    <div className="filter-list" style={{position:"absolute", top: "50px"}}>
        <ul className="filter-listitems">
            <li className="filter-listitem filter-listitem--active">Активный элемент</li>
            <li className="filter-listitem">Элемент 2</li>
            <li className="filter-listitem">Элемент 3</li>
        </ul>
    </div>
    )
}

export default FilterList;