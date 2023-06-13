import { connect } from "react-redux";


function CounterView(props) {
    return (
        <>
            <h2>Este es nuestro contador</h2>
            <h3>Contador {props.count} - {props.incre}</h3>
        </>
    )
}

const mapStateToProps = (state) => {
    const obj = {
        count: state.counter.count,
        incre: state.counter.increment

    }
    return obj;
}

export default connect(mapStateToProps)(CounterView);