import { useState } from "react"

const initial_state = {
    email: "",
    password: ""
}

const Login = ({ loginUser, loginError }) => {
    const [formData, setFormdata] = useState(initial_state)
    const handleSubmitForm = (ev) => {
        loginUser(formData);
    }
    const handleInput = (ev) => {
        const { name, value } = ev.target
        setFormdata({ ...formData, [name]: value })
    }
    const handleCancel = () => {
        setFormdata(initial_state)
    }

    return (
        <div className="">
            <form onSubmit={(ev) => ev.preventDefault()}>

                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" onChange={handleInput} value={formData.email} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={handleInput} value={formData.password} />
                <br />
                <input type="submit" value="inicia sesion" onClick={handleSubmitForm} />

                <input type="submit" value="cancelar" onClick={handleCancel} />
            </form>
            {loginError ? <p style={{ color: "red" }}>{loginError}</p> : null}
        </div >
    )
}

export default Login

