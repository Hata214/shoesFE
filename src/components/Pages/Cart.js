import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    // Placeholder cart items
    const cartItems = [
        {
            id: 1,
            name: 'Nike Air Max',
            price: 129.99,
            size: '42',
            quantity: 1,
            image: 'placeholder.jpg'
        },
        {
            id: 2,
            name: 'Adidas Ultraboost',
            price: 179.99,
            size: '43',
            quantity: 1,
            image: 'placeholder.jpg'
        }
    ];

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = 10;
    const total = subtotal + shipping;

    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items */}
                    <div className="lg:w-2/3">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md mb-4">
                                <div className="w-24 h-24 bg-gray-200 rounded-lg"></div>
                                <div className="flex-grow">
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <p className="text-gray-600">Size: {item.size}</p>
                                    <p className="text-red-500 font-semibold">${item.price}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="w-8 h-8 flex items-center justify-center border rounded-full">
                                        -
                                    </button>
                                    <span className="w-8 text-center">{item.quantity}</span>
                                    <button className="w-8 h-8 flex items-center justify-center border rounded-full">
                                        +
                                    </button>
                                </div>
                                <button className="text-gray-500 hover:text-red-500">
                                    <i className="fas fa-trash"></i>
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="lg:w-1/3">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span>${shipping.toFixed(2)}</span>
                                </div>
                                <div className="border-t pt-4">
                                    <div className="flex justify-between font-semibold">
                                        <span>Total</span>
                                        <span>${total.toFixed(2)}</span>
                                    </div>
                                </div>
                                <Link
                                    to="/checkout"
                                    className="block w-full bg-red-500 text-white text-center py-3 rounded-full hover:bg-red-600 transition-colors"
                                >
                                    Proceed to Checkout
                                </Link>
                                <Link
                                    to="/shop"
                                    className="block w-full text-center py-3 text-gray-600 hover:text-gray-900"
                                >
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart; 