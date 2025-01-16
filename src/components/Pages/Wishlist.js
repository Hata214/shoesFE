import React from 'react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    // Placeholder wishlist items
    const wishlistItems = [
        {
            id: 1,
            name: 'Nike Air Max',
            price: 129.99,
            image: 'placeholder.jpg'
        },
        {
            id: 2,
            name: 'Adidas Ultraboost',
            price: 179.99,
            image: 'placeholder.jpg'
        },
        {
            id: 3,
            name: 'Puma RS-X',
            price: 109.99,
            image: 'placeholder.jpg'
        }
    ];

    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>

                {wishlistItems.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {wishlistItems.map((item) => (
                            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                {/* Product Image */}
                                <div className="aspect-square bg-gray-100"></div>

                                {/* Product Info */}
                                <div className="p-4">
                                    <Link to={`/product/${item.id}`} className="block">
                                        <h3 className="font-semibold text-lg mb-2 hover:text-red-500 transition-colors">
                                            {item.name}
                                        </h3>
                                    </Link>
                                    <p className="text-red-500 font-semibold mb-4">${item.price}</p>

                                    {/* Actions */}
                                    <div className="flex gap-2">
                                        <button className="flex-1 bg-red-500 text-white py-2 rounded-full hover:bg-red-600 transition-colors">
                                            Add to Cart
                                        </button>
                                        <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                                            <i className="fas fa-trash text-gray-500"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i className="far fa-heart text-2xl text-gray-400"></i>
                        </div>
                        <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
                        <p className="text-gray-600 mb-6">
                            Browse our collection and add your favorite items to your wishlist
                        </p>
                        <Link
                            to="/shop"
                            className="inline-block bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors"
                        >
                            Start Shopping
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Wishlist; 