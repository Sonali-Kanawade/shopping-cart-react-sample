import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Product, User } from "../types";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function Root() {
    const [user, setUser] = useState<User | null>(null);
    // const [cart, setCart] = useState<Product[]>([]);

    const cart = useSelector((state: RootState) => state.cart.items)

    const loginUser = () => {
        setUser({id:1, username:"abhishek", role:["user"]})
    }

    const logoutUser = () => {
        setUser(null)
    }

    return (
        <div style={{width:'400px'}}>
            <nav className='flex-apart'>
                <span>LOGO</span> 
                <Link to={'/cart'}><span className="pink">{cart.length}</span><span> Cart</span></Link>              
            </nav>
            <div className='flex-apart'>
                <Link to="/">Home</Link>
                <Link to="/products/computer">Computer</Link>
                <Link to="/products/desk">Desk</Link>
                <Link to="/products/gadget">Gadget</Link>
                <Link to="/products/tshirt">Tshirt</Link>
            </div>
            {/* // user, loginUser, logoutUser, */}
            <Outlet context={{}} />
        </div>
    )
}
