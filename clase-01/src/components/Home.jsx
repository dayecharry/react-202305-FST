import Boton from "./Boton"
function Home({ children, saludo }) {

    return (
        <>
            <h2>Este es el Home {saludo}</h2>
            <Boton estilo="rojo" texto="Registrar usuario" />

            {children}
        </>
    )
}
export default Home;