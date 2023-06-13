import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "../redux/counter/counter.actions"

function CounterButton(props) {



    return (
        <div>
            <button onClick={() => {
                props.dispatch(incrementCounter())
            }}>
                Aumentar contador
            </button>
            <button onClick={() => {
                props.dispatch(decrementCounter())
            }}> Decrementar contador</button>
        </div>
    )

}
export default connect()(CounterButton);