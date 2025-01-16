import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState({
        name: 'Nike Air Max 270',
        price: 149.99,
        description: 'The Nike Air Max 270 delivers unrivaled comfort with its large Air unit and soft foam cushioning. The sleek design combines heritage Air Max elements with modern updates for a striking look that\'s ready for the streets.',
        sizes: [40, 41, 42, 43, 44, 45],
        colors: ['Black/White', 'White/Red', 'Blue/Grey'],
        features: [
            'Mesh upper for breathability',
            'Max Air 270 unit delivers unrivaled comfort',
            'Foam midsole for responsive cushioning',
            'Rubber outsole for durability'
        ]
    });

    useEffect(() => {
        // Here you would typically fetch the product data using the id
        console.log('Fetching product with id:', id);
        // For now, we're using static data
    }, [id]);

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size');
            return;
        }
        // Add to cart logic here
        console.log('Added to cart:', { ...product, size: selectedSize, quantity });
    };

    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Product Images */}
                    <div className="lg:w-1/2">
                        <div className="bg-gray-100 rounded-lg aspect-square mb-4"></div>
                        <div className="grid grid-cols-4 gap-4">
                            <div className="bg-gray-100 rounded-lg aspect-square"></div>
                            <div className="bg-gray-100 rounded-lg aspect-square"></div>
                            <div className="bg-gray-100 rounded-lg aspect-square"></div>
                            <div className="bg-gray-100 rounded-lg aspect-square"></div>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="lg:w-1/2">
                        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                        <p className="text-2xl text-red-500 font-semibold mb-6">${product.price}</p>

                        <div className="mb-6">
                            <h3 className="font-medium mb-2">Description</h3>
                            <p className="text-gray-600">{product.description}</p>
                        </div>

                        {/* Size Selection */}
                        <div className="mb-6">
                            <h3 className="font-medium mb-2">Select Size</h3>
                            <div className="grid grid-cols-3 gap-2">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        className={`py-2 border rounded-lg ${selectedSize === size
                                            ? 'border-red-500 text-red-500'
                                            : 'border-gray-300 hover:border-gray-400'
                                            }`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="mb-6">
                            <h3 className="font-medium mb-2">Quantity</h3>
                            <div className="flex items-center gap-2">
                                <button
                                    className="w-8 h-8 flex items-center justify-center border rounded-full"
                                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                                >
                                    -
                                </button>
                                <span className="w-8 text-center">{quantity}</span>
                                <button
                                    className="w-8 h-8 flex items-center justify-center border rounded-full"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Add to Cart */}
                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-red-500 text-white py-3 rounded-full hover:bg-red-600 transition-colors mb-4"
                        >
                            Add to Cart
                        </button>

                        {/* Wishlist */}
                        <button className="w-full border border-gray-300 py-3 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                            <i className="far fa-heart"></i>
                            Add to Wishlist
                        </button>

                        {/* Features */}
                        <div className="mt-8">
                            <h3 className="font-medium mb-4">Product Features</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                                {product.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail; 