import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { Product } from "../types";
import ProductCard from "./ProductCard";

const Products = () => {
    const [productData, setProductData] = useState<Product[]>([]);

    const params = useParams(); 
    const navigate = useNavigate();

    const applyFilter = (e: any) => {
        const filter = e.target.value;
        navigate(`/products/${params.category}/${filter}`)
    }

    useEffect(() => {
        fetch("https://gfdr3mj1e5.execute-api.ap-south-1.amazonaws.com/dev/")
        .then((res)=>{
            return res.json()
        })
        .then((data)=> {
            setProductData(JSON.parse(data.body))
        })
    }, [])
    
    return (
        <div className='products card'>
        <div>
            <select onChange={applyFilter}>
                <option>Price:</option>
                <option value="high-to-low">High to Low</option>
                <option value="low-to-high">Low to High</option>
            </select>
        </div>
        <div>
            {
                (productData) ?
                productData.map((val: Product) => {
                    if(params.category === val.type) {
                        return (
                            <div key={val.id} className="product-info">
                                <ProductCard product={val}/>        
                            </div>
                        )
                    }
                }) : "No data"
            }
        </div>
    </div>
    )
}

export default Products;