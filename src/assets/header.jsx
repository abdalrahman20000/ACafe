import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Coffee,  Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


const Header =()=>{
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
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
                                                href={item === 'Home' ? '/ACafe' : `/${item.toLowerCase()}`}
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
    )
}

export default Header;