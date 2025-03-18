import { useCartStore } from '../store/cartStore';
import { CartItem } from '../components/CartItem';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Cart() {
    const { items, total, clearCart } = useCartStore();

    if (items.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                <p className="text-gray-600 mb-8">Add some products to your cart to see them here.</p>
                <Button asChild>
                    <Link to="/">Continue Shopping</Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8">
                    <Card>
                        <CardContent className="p-6">
                            {items.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </CardContent>
                    </Card>
                </div>
                <div className="lg:col-span-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Order Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="flex justify-between mb-4">
                                <span>Subtotal</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between mb-4">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="border-t pt-4">
                                <div className="flex justify-between mb-4">
                                    <span className="font-semibold">Total</span>
                                    <span className="font-semibold">${total.toFixed(2)}</span>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-4">
                            <Button
                                className="w-full"
                                onClick={() => {
                                    alert('Thank you for your purchase!');
                                    clearCart();
                                }}
                            >
                                Checkout
                            </Button>
                            <Button variant="outline" asChild>
                                <Link to="/">Continue Shopping</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
} 