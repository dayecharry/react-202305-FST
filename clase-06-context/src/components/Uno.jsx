import { UserContext } from "./Context/userContext";
import { useContext } from "react";

function Uno() {

    const usersContext = useContext(UserContext);

    return <><h2>Este es el componente Uno

        <button onClick={() => {
            usersContext.addUser("Usuario espia")
        }}>añadir un usuario</button>
    </h2>
    </>
}
export default Uno;