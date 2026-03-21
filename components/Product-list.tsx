import Stripe from "stripe";

interface props {
    products: Stripe.Product[];
}

export const ProductList = ({ products }: props) => {

    return (
        <div>
            <div>
                <input type="text" placeholder="Search products...." />
            </div>
            <ul>
                {products.map((product)=>{
                    return <li>   </li>
                })}
            </ul>
        </div>

    );

};