import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Cart = () => {
    const cart = useSelector((state: RootState) => state.cart.items)
    const total = useSelector((state: RootState) => state.cart.total)
    return(
        <div>
            {cart.length ? <><span>Cart Items:</span><hr /></> : <span>No item in cart</span>}
            {                
                cart.map(item => {
                    return (
                        <div className="flex-apart">
                            <div>{item.name}</div>
                            <div>{item.price} INR</div>
                        </div>
                    )
                })
            }
            <hr />
             <div className="flex-apart">
                <div>Total</div>
                <div>{total} INR</div>
            </div>
        </div>
    )
}

export default Cart;