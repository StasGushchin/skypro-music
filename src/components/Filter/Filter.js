function Filter() {

const [activeFilter, setActiveFiler] = useState(null);

return (
    <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div className="filter">
          <Filter isOpen={activeFilter === "author"}/>
          <Filter isOpen={activeFilter === "year"}/>
          <Filter isOpen={activeFilter === "style"}/>
        </div>
    </div>
    )
}