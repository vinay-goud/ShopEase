import { CartItem as CartItemType } from '../types';
import { useCartStore } from '../store/cartStore';
import { Button } from "@/components/ui/button";

interface CartItemProps {
    item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
    const { updateQuantity, removeItem } = useCartStore();

    return (
        <div className="flex items-center gap-4 py-4 border-b last:border-b-0">
            <div className="w-24 h-24 relative flex-shrink-0">
                <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-contain"
                />
            </div>
            <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-blue-600 font-bold">${item.price.toFixed(2)}</p>
                <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8"
                        >
                            -
                        </Button>
                        <span className="px-4">{item.quantity}</span>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8"
                        >
                            +
                        </Button>
                    </div>
                    <Button
                        variant="ghost"
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-600 hover:bg-red-50"
                    >
                        Remove
                    </Button>
                </div>
            </div>
            <div className="text-right">
                <p className="text-lg font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                </p>
            </div>
        </div>
    );
} 