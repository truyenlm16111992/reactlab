import React from 'react'
import ProductItem from './ProductItem';


const ProductList = (props) => {
    const { prdList, setProductDetail, handleCart } = props;
    return (
        <div className="row">
            {prdList.map((product) =>
                <ProductItem handleCart={handleCart} setProductDetail={setProductDetail} key={product.id} product={product} />
            )}
        </div>
    )
}

export default ProductList