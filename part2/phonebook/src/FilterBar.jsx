const FilterBar = ({filterKey, setFilterKey, filterHandle}) =>{

    const hanldeOnChange = (event) => {
        const key = event.target.value
        setFilterKey(key)
        filterHandle(key)
    }

    return (
        <div>
            <div>Filter with:<input value={filterKey} onChange={hanldeOnChange}/> </div>
        </div>
    )
}

export default FilterBar;