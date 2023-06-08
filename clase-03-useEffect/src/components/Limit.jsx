function Limit({ handleCount }) {

    const handleKeyup = (event) => {
        console.log(event.target.value)
        const valueInput = parseInt(event.target.value);

        if (valueInput <= 0 || isNaN(valueInput)) {
            handleCount(10);
        } else {
            handleCount(event.target.value)
        }
    }

    return (
        <>
            < input type="number" onChange={handleKeyup} />
            {/*<input type="number" onKeyUp={(event) => {
                handleCount(event.target.value) } } />*/}
        </>

    )
}
export default Limit;