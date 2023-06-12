import "./Home.css"
import data from "../../data/product.json"
import { Link } from "react-router-dom"

function Home() {

    const productLi = data.items.map((product) => {
        return <li key={product.id}>
            <Link to={`/product/${product.id}`}>
                <img src={product.imageUrl} alt="" />
                <h3>{product.name}</h3>
            </Link>
        </li>
    })

    return (
        <>
            <img src="https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg" alt="esta es la pagiana del home" />
            <ul>
                {productLi}
            </ul>

        </>
    )
}
export default Home