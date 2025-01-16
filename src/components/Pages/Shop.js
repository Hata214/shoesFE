import React from 'react';

const Shop = () => {
    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <div className="w-full md:w-1/4">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-4">Filters</h3>
                            {/* Price Range */}
                            <div className="mb-6">
                                <h4 className="font-medium mb-2">Price Range</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        <span>Under $50</span>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        <span>$50 - $100</span>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        <span>$100 - $200</span>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        <span>Over $200</span>
                                    </div>
                                </div>
                            </div>
                            {/* Brands */}
                            <div className="mb-6">
                                <h4 className="font-medium mb-2">Brands</h4>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        <span>Nike</span>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        <span>Adidas</span>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        <span>Puma</span>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" className="mr-2" />
                                        <span>New Balance</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="w-full md:w-3/4">
                        <div className="mb-8 flex justify-between items-center">
                            <h2 className="text-2xl font-bold">All Products</h2>
                            <select className="border rounded-lg px-4 py-2">
                                <option>Sort by: Featured</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Newest First</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Placeholder for products */}
                            {[1, 2, 3, 4, 5, 6].map((item) => (
                                <div key={item} className="bg-white rounded-lg shadow-md p-4">
                                    <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                                    <h3 className="font-medium mb-2">Product Name</h3>
                                    <p className="text-gray-600">$99.99</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop; 