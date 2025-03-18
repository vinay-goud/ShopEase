import { Product } from '../types';
import { useCartStore } from '../store/cartStore';
import { toast } from 'react-toastify';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const addItem = useCartStore((state) => state.addItem);

    const handleAddToCart = () => {
        addItem(product);
        toast.success('Added to cart!');
    };

    return (
        <Card className="h-full flex flex-col">
            <CardHeader className="p-4">
                <div className="relative h-48 w-full">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="absolute inset-0 w-full h-full object-contain"
                    />
                </div>
            </CardHeader>
            <CardContent className="flex-grow p-4">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold text-gray-800 truncate">
                        {product.title}
                    </h3>
                    <Badge variant="secondary">
                        ★ {product.rating.rate}
                    </Badge>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2 mt-2">
                    {product.description}
                </p>
                <div className="mt-4">
                    <span className="text-lg font-bold text-blue-600">
                        ${product.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-gray-500 ml-2">
                        ({product.rating.count} reviews)
                    </span>
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <Button
                    className="w-full"
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
} 