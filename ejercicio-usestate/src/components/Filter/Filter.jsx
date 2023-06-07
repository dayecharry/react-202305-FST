function Filter({ handleFilter }) {


    const handleChange = (event) => {
        handleFilter(event.target.value)
    }

    return (
        <form>
            <input type="text" onKeyUp={handleChange} />
        </form>
    )
}
export default Filter