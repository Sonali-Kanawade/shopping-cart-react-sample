import { useOutletContext } from "react-router-dom";
import { Product } from "../types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { RootState } from "../store/store";

const ProductCard = (props: { product: Product; }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart.items);
    // const context = useOutletContext();
console.log(cart)
    const addToCartData = (val: Product) => {
        // context.setCart([...context.cart, val])
        dispatch(addToCart({...val, quantity: 1}))        
    }

    return (
        <div className="flex-apart">  
            <div>
                <div>{props.product.name}</div>
                <div>{props.product.price} INR</div>
            </div>
            <div>
                {cart.find(item =>  item.name === props.product.name) ? "Added" : 
                <button className="btn purple" onClick={() => addToCartData(props.product)}>Add to Cart</button>
                }
            </div>
        </div>
    )
}

export default ProductCard;