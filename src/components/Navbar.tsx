import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

export function Navbar() {
    const items = useCartStore((state) => state.items);
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/shopping-cart.svg" alt="ShopEase Logo" className="w-8 h-8" />
                        <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-sans">ShopEase</span>
                    </Link>
                    <Link
                        to="/cart"
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                        <span className="font-medium">Cart</span>
                        {itemCount > 0 && (
                            <span className="bg-blue-500 text-white text-sm rounded-full px-2 py-1 min-w-[20px] text-center">
                                {itemCount}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
} 