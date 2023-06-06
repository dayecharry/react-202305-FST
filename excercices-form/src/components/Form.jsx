import Input from "./Input"
import Button from "./Button"
function Form() {

    return (
        <form action="">
            <Input text="nombre" placeholder="ej. Mari carmen" />
            <Input text="email" placeholder="example@email.com" />
            <Button />
        </form>
    )
}
export default Form