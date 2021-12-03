import React from 'react'

import { ListProducts } from '../Data/Data'
import ProductCard from '../ProductCard/ProductCard'

const Products = () => {
    return (
        <div className="productsContent">
            <h2>This is the Products Page</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus inventore tempora, ad dolorum odit quaerat corrupti commodi debitis veritatis? Eveniet impedit ratione, optio suscipit minus ipsum vel ad quod.</p>
            <hr />
            <div className="listProducts">
                {ListProducts.map(product =>
                    <ProductCard product={product} key={product.id} />
                )}
            </div>
        </div>
    )
}

export default Products
