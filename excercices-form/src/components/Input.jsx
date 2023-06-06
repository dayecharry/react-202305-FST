function Input({ text, placeholder }) {

    return (
        <div>
            <label htmlFor={text}> {text} </label>
            <input type="text" id={text} placeholder={placeholder} />
        </div>
    )
}
export default Input