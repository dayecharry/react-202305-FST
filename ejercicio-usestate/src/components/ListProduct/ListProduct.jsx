import Product from "../Product/Product";

function Listproduct({ list }) {

    const renderProducts = () => {
        return list.map((product, i) => <li key={i}>
            <Product product={product} />
        </li>)
    }


    return (<div>
        <h2>Listado de productos</h2>
        <ul>
            {renderProducts()}
        </ul>
    </div>)
}
export default Listproduct;