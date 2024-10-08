import React, { useState, useEffect } from 'react';
import { Coffee, ShoppingCart, Star,Menu,X, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion,AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const MenuPage = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const fetchProducts = () => {
            const storedProducts = JSON.parse(localStorage.getItem('products'));
            if (storedProducts && storedProducts.length > 0) {
                setProducts(storedProducts);
            }
        };

        fetchProducts();
        // Set up an interval to check for product updates every 5 seconds
        const intervalId = setInterval(fetchProducts, 5000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    const handleProductClick = () => {
        navigate('/auth'); // Redirect to login page
    };

    return (
        <div className="min-h-screen bg-[#034c52] text-[#ECDFCC]">
            {/* Header */}
            <header className="bg-[#023c41] p-4 shadow-md sticky top-0 z-10">
                <div className="container mx-auto flex justify-between items-center">
                    <motion.div
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Coffee size={32} className="text-[#ECDFCC]" />
                        <h1 className="text-2xl font-bold text-[#ECDFCC]">ACafe</h1>
                    </motion.div>

                    <div className="hidden md:flex items-center justify-center flex-grow">
                        <nav>
                            <ul className="flex space-x-4">
                                {['Home', 'Menu', 'About', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <a href={item === 'Home' ? '/' : `/ACafe/${item.toLowerCase()}`} className="text-[#ECDFCC] hover:text-white transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:block bg-[#ECDFCC] text-[#034c52] px-4 py-2 rounded-full hover:bg-[#d8c9b3] transition-colors duration-300"
                        onClick={() => navigate('/auth')}
                    >
                        Sign In
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="md:hidden text-[#ECDFCC]"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>

                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden mt-4"
                        >
                            <nav>
                                <ul className="flex flex-col space-y-2">
                                    {['Home', 'Menu', 'About', 'Contact'].map((item) => (
                                        <li key={item}>
                                            <a
                                                href={item === 'Home' ? '/' : `/ACafe/${item.toLowerCase()}`}
                                                className="block text-[#ECDFCC] hover:text-white transition-colors py-2"
                                                onClick={toggleMenu}
                                            >
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-[#ECDFCC] text-[#034c52] px-4 py-2 rounded-full hover:bg-[#d8c9b3] transition-colors duration-300 mt-4"
                                onClick={() => {
                                    navigate('/auth');
                                    toggleMenu();
                                }}
                            >
                                Sign In
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Menu Section */}
            <main className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold text-[#ECDFCC] text-center mb-8">Our Menu</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            whileHover={{ scale: 1.05 }}
                            className="bg-[#023c41] rounded-lg shadow-lg overflow-hidden cursor-pointer"
                            onClick={handleProductClick}
                        >
                            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold text-[#ECDFCC] mb-2">{product.title}</h3>
                                <p className="text-[#ECDFCC] mb-2">{product.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-[#ECDFCC] font-bold">${product.price.toFixed(2)}</span>
                                    <div className="flex items-center">
                                        <Star className="text-yellow-400 mr-1" size={16} />
                                        <span className="text-[#ECDFCC]">{product.rating || 4.5}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-[#023c41] text-[#ECDFCC] py-8 px-4">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold mb-2">ACafe</h3>
                        <p className="text-sm">Brewing perfection since 2010</p>
                    </div>
                    <div className="flex space-x-4">
                        <a className="hover:text-white transition-colors"><Facebook size={24} /></a>
                        <a className="hover:text-white transition-colors"><Instagram size={24} /></a>
                        <a className="hover:text-white transition-colors"><Twitter size={24} /></a>
                    </div>
                </div>
                <div className="container mx-auto mt-8 text-center text-sm">
                    <p>&copy; 2024 ACafe. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default MenuPage;