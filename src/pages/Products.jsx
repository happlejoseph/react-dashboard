

import React from "react";
import products from "../datas/products.json"

const Products = ()=> {


    return(
        <div className="products-container">
            {products.map((product)=> (
                <div className="product-card" key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Category: {product.category}</p>
                    <p>Price: {product.price}</p>

                </div>
            ))}
        </div>
    )
}

export default Products