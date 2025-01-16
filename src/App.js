import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

// Import pages
import Home from './components/Pages/Home';
import Shop from './components/Pages/Shop';
import About from './components/Pages/About';
import Auth from './components/Pages/Auth';
import Cart from './components/Pages/Cart';
import ProductDetail from './components/Pages/ProductDetail';
import Wishlist from './components/Pages/Wishlist';
import Profile from './components/Pages/Profile';
import Help from './components/Pages/Help';
import Checkout from './components/Pages/Checkout';
import CheckoutSuccess from './components/Pages/CheckoutSuccess';
import CheckoutFailed from './components/Pages/CheckoutFailed';
import SearchResults from './components/Pages/SearchResults';
import Privacy from './components/Pages/Privacy';
import Terms from './components/Pages/Terms';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/checkout/success" element={<CheckoutSuccess />} />
                    <Route path="/checkout/failed" element={<CheckoutFailed />} />
                    <Route path="/search" element={<SearchResults />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/terms" element={<Terms />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App; 