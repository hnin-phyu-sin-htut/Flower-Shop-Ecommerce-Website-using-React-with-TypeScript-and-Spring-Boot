import {useState} from "react";
import type {CartItem} from "../model/CartItem.ts";
import {CartContext} from "../context/CartContext.ts";

interface Props{
    children: React.ReactNode;
}

export default function CartProvider({children} : Props) {
    const [items, setItems] = useState<CartItem[]>([]);

    const addItem = (item: CartItem) => {
        setItems(prevItem => {
            return [...prevItem, item];
        });
    }

    const removeItem = (id: number) => {
        setItems(items => items.filter(item => item.id !== id));
    }

    const clearCart = () => {
        setItems([]);
    }

    const value = {
        items,
        addItem,
        removeItem,
        clearCart
    }
    return (
        <>
            <CartContext.Provider value={value} >
                {children}
            </CartContext.Provider>
        </>
    );
}
