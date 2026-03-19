import Stripe from "stripe";
import { Card } from "./ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
    products: Stripe.Product [];
}


export const Carousel = ({products}:Props) =>{
    const [current, setCurrent] = useState<number>(0);

    useEffect(()=>{
        const inteval = setInterval(() =>{
                setCurrent ((prev) => (prev + 1)% products.length);
        }, 3000);

        return () => clearInterval(inteval);
    }, [products.length]);

        const currentProduct = products[current];
 
        const Price = currentProduct.default_price as Stripe.Price;

    return <Card>
        {currentProduct.images && currentProduct.images[0] && (
            <div>
                <Image
                alt={currentProduct.name}
                src={currentProduct.images[0]}
                objecFit="cover"/>
            </div>
        )}
    </Card>
        
    
};