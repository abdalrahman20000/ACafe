import React, { useState } from 'react';
import { Coffee, User, Clock, Leaf,Menu,X, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion,AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AboutUsPage = () => {
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const pageVariants = {
        initial: { opacity: 0, y: 50 },
        in: { opacity: 1, y: 0 },
        out: { opacity: 0, y: -50 }
    };

    const pageTransition = {
        type: 'tween',
        ease: 'anticipate',
        duration: 0.5
    };

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="min-h-screen bg-[#034c52] text-[#ECDFCC]"
        >
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

            {/* Hero Section */}
            <motion.section
                className="py-20 px-4 bg-[url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="container mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-bold mb-4"
                    >
                        About ACafe
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl mb-8"
                    >
                        Brewing passion since 2010
                    </motion.p>
                </div>
            </motion.section>

            {/* Our Story Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold mb-8 text-center"
                    >
                        Our Story
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <p className="text-lg mb-4">
                                ACafe was born out of a simple passion: to serve the perfect cup of coffee. Founded in 2010 by a group of coffee enthusiasts, we've grown from a small corner shop to a beloved local chain, never losing sight of our original mission.
                            </p>
                            <p className="text-lg">
                                We believe that great coffee is an art form, requiring dedication, skill, and the finest ingredients. Every cup we serve is a testament to this belief, crafted with care to bring you the best possible coffee experience.
                            </p>
                        </motion.div>
                        <motion.div
                            className="relative h-80"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="ACafe Story" className="w-full h-full object-cover rounded-lg shadow-lg" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-16 px-4 bg-[#023c41]">
                <div className="container mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold mb-8 text-center"
                    >
                        Our Values
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Coffee, title: "Quality", description: "We never compromise on the quality of our coffee or ingredients." },
                            { icon: User, title: "Community", description: "We're more than just a coffee shop; we're a gathering place for our community." },
                            { icon: Clock, title: "Consistency", description: "You can count on us for the same great taste and service, every time." },
                            { icon: Leaf, title: "Sustainability", description: "We're committed to environmentally friendly practices in all aspects of our business." }
                        ].map((value, index) => (
                            <motion.div
                                key={value.title}
                                whileHover={{ scale: 1.05 }}
                                className="bg-[#034c52] p-6 rounded-lg shadow-lg"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <value.icon size={48} className="mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                                <p>{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

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
        </motion.div>
    );
};

export default AboutUsPage;