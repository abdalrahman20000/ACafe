import React, { useState } from 'react';
import { Coffee, User, Clock, Leaf, Menu, X, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import backgroundVideo from "../assets/bgVideo.mp4";

const AboutUsPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
            {/* Hero Section with Background Video */}
            <motion.section
                className="relative h-[350px] overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src={backgroundVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
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
        </motion.div>
    );
};

export default AboutUsPage;
