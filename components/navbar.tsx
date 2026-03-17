import Link from "next/link"

export default function Navbar () {
    return(
        <nav>
            <div>
                <Link href="/">E-COMMERCE</Link>
            </div>
            <div>
                <Link href="/">Home</Link>
                <Link href="/Product">Product</Link>
                <Link href="/Checkout">Checkout</Link>
            </div>
        </nav>
    )
}