import FilterByCategory from "./FilterByCategory/FilterByCategory"
import FilterByName from "./FilterByName/FilterByName"

function Filter({ handleFilter, handleCategory }) {



    return (
        <form>

            <FilterByName handleFilter={handleFilter} />
            <FilterByCategory handleCategory={handleCategory} />

        </form>
    )
}
export default Filter