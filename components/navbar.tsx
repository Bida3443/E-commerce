import Link from "next/link"

export default function Navbar () {
    return(
        <nav className="sticky top-0 z-50 bg-white shadow">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                  
                <Link href="/" className="hover:text-blue-600">E-COMMERCE</Link>
            
            <div className="hidden md:flex space-x-6">
                <Link href="/">Home</Link>
                <Link href="/Product" className="hover:text-blue-600">Product</Link>
                <Link href="/Checkout" className="hover:text-blue-600">Checkout</Link>
            </div>
            <div className="flex items-center">vvv</div>
            </div>
        </nav>
    )
}

