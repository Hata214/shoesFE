import React, { useState } from 'react';

const Checkout = () => {
    const [step, setStep] = useState(1);

    // Placeholder cart items
    const cartItems = [
        {
            id: 1,
            name: 'Nike Air Max',
            price: 129.99,
            size: '42',
            quantity: 1
        },
        {
            id: 2,
            name: 'Adidas Ultraboost',
            price: 179.99,
            size: '43',
            quantity: 1
        }
    ];

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = 10;
    const total = subtotal + shipping;

    const handleSubmit = (e) => {
        e.preventDefault();
        setStep(step + 1);
    };

    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Progress Steps */}
                    <div className="flex justify-between items-center mb-8">
                        <div className="flex items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-red-500 text-white' : 'bg-gray-200'
                                }`}>
                                1
                            </div>
                            <div className={`h-1 w-16 ${step >= 2 ? 'bg-red-500' : 'bg-gray-200'}`}></div>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-red-500 text-white' : 'bg-gray-200'
                                }`}>
                                2
                            </div>
                            <div className={`h-1 w-16 ${step >= 3 ? 'bg-red-500' : 'bg-gray-200'}`}></div>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-red-500 text-white' : 'bg-gray-200'
                                }`}>
                                3
                            </div>
                        </div>
                        <div className="text-sm text-gray-600">
                            Step {step} of 3
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Form Section */}
                        <div className="lg:w-2/3">
                            {/* Shipping Information */}
                            <div className={step === 1 ? 'block' : 'hidden'}>
                                <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-700 text-sm font-medium mb-2">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 text-sm font-medium mb-2">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-sm font-medium mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-sm font-medium mb-2">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 text-sm font-medium mb-2">
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-red-500 text-white py-3 rounded-full hover:bg-red-600 transition-colors"
                                    >
                                        Continue to Payment
                                    </button>
                                </form>
                            </div>

                            {/* Payment Information */}
                            <div className={step === 2 ? 'block' : 'hidden'}>
                                <h2 className="text-2xl font-bold mb-6">Payment Information</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-gray-700 text-sm font-medium mb-2">
                                            Card Number
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="1234 5678 9012 3456"
                                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-700 text-sm font-medium mb-2">
                                                Expiry Date
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="MM/YY"
                                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-700 text-sm font-medium mb-2">
                                                CVV
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="123"
                                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-red-500 text-white py-3 rounded-full hover:bg-red-600 transition-colors"
                                    >
                                        Place Order
                                    </button>
                                </form>
                            </div>

                            {/* Order Confirmation */}
                            <div className={step === 3 ? 'block' : 'hidden'}>
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <i className="fas fa-check text-2xl text-green-500"></i>
                                    </div>
                                    <h2 className="text-2xl font-bold mb-2">Order Confirmed!</h2>
                                    <p className="text-gray-600 mb-6">
                                        Thank you for your purchase. Your order has been confirmed.
                                    </p>
                                    <button className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors">
                                        View Order Details
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:w-1/3">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
                                <div className="space-y-4">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="flex justify-between">
                                            <div>
                                                <p className="font-medium">{item.name}</p>
                                                <p className="text-sm text-gray-600">Size: {item.size}</p>
                                            </div>
                                            <p className="font-medium">${item.price}</p>
                                        </div>
                                    ))}
                                    <div className="border-t pt-4">
                                        <div className="flex justify-between mb-2">
                                            <span>Subtotal</span>
                                            <span>${subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between mb-2">
                                            <span>Shipping</span>
                                            <span>${shipping.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between font-semibold">
                                            <span>Total</span>
                                            <span>${total.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout; 