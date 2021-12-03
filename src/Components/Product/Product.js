import React, { useState, useEffect } from 'react'
import { ListProducts } from '../Data/Data'

const Product = ({ match, location, history }) => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(ListProducts.find(product => product.id === +match.params.id))
    }, [match.params.id]);

    // const product = location.state
    // console.log(typeof match.params.id)
    return (
        <div className="productDetails">
            <h2>{product.name}</h2>
            <h3>{product.description}</h3>
            <img src={product.img} alt={product.name} className="productImg" />
            <button onClick={() => history.goBack()}>Go Back</button>
            {/* <button onClick={() => history.push("/about")}>Go Back</button> */}
        </div>
    )
}

export default Product
