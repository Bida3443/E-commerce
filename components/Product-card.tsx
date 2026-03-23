import Stripe from "stripe";
import Link from "next/link";
// import { link } from "fs";
import { Card } from "./ui/card";
import Image from "next/image";



interface props {
    products: Stripe.Product[];
}

export const ProductCard = ({ products }: props) => {

    return (
        <div> 
            <div>
                <input type="text" placeholder="Search products...." />
            </div>  
            <ul>
                {products.map((product)=>{
                    return (
                        <Link href={"/product/1"}>
                            <Card>
                                 {product.images && product.images[0] && (
                                            <div className="relative flex justify-center items-center h-80 w-full">
                                                <Image
                                
                                                alt={product.name}
                                                src={product.images[0]}
                                                width={380}
                                                height={100}
                                                objectFit="cover"
                                                className="transition-opacity duration-500 ease-in-out"/>
                                            </div>
                                
                                        )}

                            </Card>
                        </Link>
                    )
                })}
            </ul>
        </div>

    );

};