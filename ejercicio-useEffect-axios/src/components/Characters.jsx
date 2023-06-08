import OneCharacter from "./OneCharacter"

function Characters({ list, addNewFavorite }) {

    const handleClick = (event) => {
        //target--> referencia al elemento clicado 
        //currentTaget--> referencia al elemento escuchado
        const id = event.currentTarget.id;
        const findCharacter = list.find((item) => {
            return item.id === id
        });

        addNewFavorite(findCharacter)
        //guardar findCharacter -> array de favoritos

        //el array  favorito debe ser una variable de estado, para que se renderice constantemente
        console.log(findCharacter)


    }

    //mapeo el listado de personajes 
    const listCharacters = list.map((item) => {
        return (
            <li key={item.id} id={item.id} onClick={handleClick}>
                <OneCharacter item={item} />
            </li>
        )
    })

    return (
        <>
            <h2>Listado de personajes</h2>
            <ul>
                {listCharacters}
            </ul>
        </>
    )

}
export default Characters