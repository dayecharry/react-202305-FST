import { Navigate } from "react-router-dom"

const AuthRoute = ({ user, component }) => {

    console.log(user)
    if (user) return component;

    if (!user) return <Navigate to="/login" />

}
export default AuthRoute