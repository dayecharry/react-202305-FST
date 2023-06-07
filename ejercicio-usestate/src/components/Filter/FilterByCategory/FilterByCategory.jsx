import React from 'react'

const FilterByCategory = ({ handleCategory }) => {

    const handleChange = (event) => {
        handleCategory(event.target.value);
    }
    return (
        <select onChange={handleChange}>
            <option value="">Seleccione</option>
            <option value="bebida">Bebida </option>
            <option value="chuches">Chuches</option>
            <option value="gluten">Gluten</option>
        </select>
    )
}

export default FilterByCategory