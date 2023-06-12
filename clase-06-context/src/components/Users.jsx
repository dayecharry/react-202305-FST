
import { useContext } from "react";
import { UserContext } from "./Context/userContext"


function Users() {

    const users = useContext(UserContext)


    return <div>
        <h3>Listado de usuarios</h3>
        {users.users.map((eachUser) => <article>
            {eachUser}
        </article>)}
        <div>
            <h2>Productos</h2>
            {users.products.map((eachProduct) => <article>{eachProduct}</article>)}
        </div>
    </div>


}
export default Users;