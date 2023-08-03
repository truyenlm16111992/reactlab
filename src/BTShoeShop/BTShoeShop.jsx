import React, { useState } from 'react'
import list from './data.json'
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'
import Cart from './Cart'


const BTShoeShop = () => {
    const [productDetail, setProductDetail] = useState(list[0]);
    const [carts, setCarts] = useState([]);
    const handleCart = (product) => {
        console.log(product);
        setCarts((currentState) => {
            const index = currentState.findIndex(e => e.id === product.id);
            if (index !== - 1) {
                currentState[index].cartQuantity += 1;
            } else {
                currentState.push({ ...product, cartQuantity: 1 });

            }
            return [...currentState];
        });
    }
    const handerCartQuantity = (id, quantity) => {
        setCarts((currentState) => {
            const index = currentState.findIndex(e => e.id === id);
            currentState[index].cartQuantity = currentState[index].cartQuantity + quantity || 1;
            return [...currentState];
        })
    }
    const handleDeleteCart = (id)=>{
        setCarts(currentState=>{
            return currentState.filter(e=>e.id!==id);
        });
    }
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between">
                <h1>BTShoeShop</h1>
                <button
                    className="btn btn-outline-success"
                    data-bs-toggle="modal"
                    data-bs-target="#carts"
                >
                    Cart
                </button>
            </div>
            <ProductList handleCart={handleCart} setProductDetail={setProductDetail} prdList={list} />
            <ProductDetail productDetail={productDetail} />
            <Cart handleDeleteCart={handleDeleteCart} handerCartQuantity={handerCartQuantity} carts={carts} />
        </div>
    )
}

export default BTShoeShop