function FilterByName({ handleFilter }) {


    const handleChange = (event) => {
        handleFilter(event.target.value)
    }

    return (
        <input type="text" onKeyUp={handleChange} />
    )
}
export default FilterByName