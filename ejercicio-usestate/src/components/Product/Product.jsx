import "./product.css"
function Product({ product }) {

    return (
        <article className="product_item">
            <h3>{product.nombre}</h3>
            <p>{product.precio} €</p>
            <p>Stock: {product.stock}</p>
        </article>
    )
}
export default Product