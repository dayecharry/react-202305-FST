function Logo(props) {
    return (
        <div>
            <h1>Este  es el componente principal Logo</h1>
            <img src={props.img} alt="logo" />

            <h2 data-testid="subtitle">Este es Subtitulo del componente logo</h2>

            <button data-testid="button-click-hello" onClick={() => props.printHello()}>Imprimir Hello</button>
        </div>
    );
}

export default Logo