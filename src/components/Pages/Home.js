import React from 'react';

const Home = () => {
    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="relative h-[600px] bg-gradient-to-r from-gray-900 to-black flex items-center">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl font-bold text-white mb-6">
                            Step into Style with SneakerVault
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Discover the latest collection of premium sneakers and elevate your footwear game.
                        </p>
                        <button className="px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors">
                            Shop Now
                        </button>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Placeholder for products */}
                        <div className="text-center">Coming Soon</div>
                        <div className="text-center">Coming Soon</div>
                        <div className="text-center">Coming Soon</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home; 