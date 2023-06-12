import { useState } from "react";
import { API } from "../../services/api"

const initial_state = {
    name: "",
    email: "",
    pet: "",
}
const Contact = ({ value }) => {
    const [formState, setFormState] = useState(initial_state);

    //spread operator (...)
    const handleInput = (ev) => {
        const { name, value } = ev.target;
        console.log()
        setFormState({ ...formState, [name]: value })

    }
    const handleCancel = () => {
        setFormState(initial_state)
    }
    const handleClick = () => {
        API.post("/personas", formState)
            .then((res) => {
                console.log(res.data)
            })
    }
    return (
        <div className="">
            <form onSubmit={(ev) => ev.preventDefault()}>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" onChange={handleInput} value={formState.name} />

                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" onChange={handleInput}
                    value={formState.email} />
                <br />
                <label htmlFor="">Tiene mascota</label>
                <input type="radio" name="pet" id="pet" value="si" onChange={handleInput} checked={formState.pet === "si"} />Si
                <input type="radio" name="pet" id="pet" value="no" onChange={handleInput} checked={formState.pet === "no"} />No
                <br />
                <input type="submit" value="contacta" onClick={handleClick} />
                <input type="button" value="cancelar" onClick={handleCancel} />

            </form>
        </div >
    )
}

export default Contact

