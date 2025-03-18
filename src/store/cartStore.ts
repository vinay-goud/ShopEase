import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartStore, Product } from '../types';

export const useCartStore = create<CartStore>()(
    persist(
        (set) => ({
            items: [],
            total: 0,
            addItem: (product: Product) => {
                set((state) => {
                    const existingItem = state.items.find((item) => item.id === product.id);
                    if (existingItem) {
                        const updatedItems = state.items.map((item) =>
                            item.id === product.id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        );
                        return {
                            items: updatedItems,
                            total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
                        };
                    }
                    const newItems = [...state.items, { ...product, quantity: 1 }];
                    return {
                        items: newItems,
                        total: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
                    };
                });
            },
            removeItem: (productId: number) => {
                set((state) => {
                    const newItems = state.items.filter((item) => item.id !== productId);
                    return {
                        items: newItems,
                        total: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
                    };
                });
            },
            updateQuantity: (productId: number, quantity: number) => {
                set((state) => {
                    if (quantity < 1) return state;
                    const updatedItems = state.items.map((item) =>
                        item.id === productId ? { ...item, quantity } : item
                    );
                    return {
                        items: updatedItems,
                        total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
                    };
                });
            },
            clearCart: () => {
                set({ items: [], total: 0 });
            },
        }),
        {
            name: 'cart-storage',
        }
    )
); 