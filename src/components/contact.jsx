import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, MapPin, Phone, Mail, MessageCircle, Send, Facebook, Instagram, Twitter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const ContactUsPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setFormData({ name: '', email: '', message: '' });

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your message sent successfully",
            showConfirmButton: false,
            timer: 1500
        });
    };

    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        in: { opacity: 1, y: 0 },
        out: { opacity: 0, y: -20 },
    };

    const pageTransition = {
        type: 'tween',
        ease: 'anticipate',
        duration: 0.5,
    };

    const contactInfo = [
        { icon: MapPin, text: '123 Coffee Ave, Brew City, BC 12345' },
        { icon: Phone, text: '+1 (555) 123-4567' },
        { icon: Mail, text: 'contact@acafe.com' },
    ];

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="min-h-screen bg-gradient-to-b bg-[#034c52] "
        >
            {/* Header */}
            <header className="bg-[#023c41] p-4 shadow-md">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                        <Coffee size={32} />
                        <h1 className="text-2xl font-bold text-[#ECDFCC]">ACafe</h1>
                    </div>
                    <nav className="mb-4 md:mb-0">
                        <ul className="flex flex-wrap justify-center space-x-4">
                            <li><a href="/" className="text-[#ECDFCC] hover:text-white transition-colors">Home</a></li>
                            <li><a href="/menu" className="text-[#ECDFCC] hover:text-white transition-colors">Menu</a></li>
                            <li><a href="/about" className="text-[#ECDFCC] hover:text-white transition-colors">About</a></li>
                            <li><a href="/contact" className="text-[#ECDFCC] hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="flex space-x-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#ECDFCC] text-[#034c52] px-4 py-2 rounded-full hover:bg-[#d8c9b3] transition-colors"
                            onClick={() => navigate('/auth')}
                        >
                            Sign In
                        </motion.button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 px-4 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center">
                <div className="container mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-bold mb-4 text-[#ECDFCC]"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl mb-8 text-[#ECDFCC]"
                    >
                        We'd love to hear from you. Let's brew something great together!
                    </motion.p>
                </div>
            </section>

            <div className="container mx-auto py-12 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-[#023c41] rounded-lg shadow-xl p-8"
                    >
                        <h2 className="text-2xl font-semibold text-[#ECDFCC] mb-6">Send us a message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-sm font-medium text-[#ECDFCC] mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-[#ECDFCC] bg-[#034c52] text-[#ECDFCC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ECDFCC]"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-sm font-medium text-[#ECDFCC] mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-[#ECDFCC] bg-[#034c52] text-[#ECDFCC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ECDFCC]"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-[#ECDFCC] mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className="w-full px-3 py-2 border border-[#ECDFCC] bg-[#034c52] text-[#ECDFCC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ECDFCC]"
                                    required
                                ></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full bg-[#ECDFCC] text-[#034c52] py-3 rounded-md hover:bg-[#d8c9b3] transition duration-300 flex items-center justify-center"
                            >
                                <Send className="mr-2" size={20} />
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-[#023c41] text-[#ECDFCC] rounded-lg shadow-xl p-8"
                    >
                        <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                                    className="flex items-start"
                                >
                                    <info.icon className="mr-4 mt-1" size={24} />
                                    <p>{info.text}</p>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            className="mt-8"
                        >
                            <h3 className="text-xl font-semibold mb-4">Follow us</h3>
                            <div className="flex space-x-4">
                                {['facebook', 'twitter', 'instagram'].map((social) => (
                                    <motion.a
                                        key={social}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="bg-[#ECDFCC] text-[#034c52] p-2 rounded-full hover:bg-[#d8c9b3] transition duration-300"
                                    >
                                        {social === 'facebook' && <Facebook size={24} />}
                                        {social === 'twitter' && <Twitter size={24} />}
                                        {social === 'instagram' && <Instagram size={24} />}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* FAQ Section */}
            <section className="py-16 px-4 bg-[#023c41]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="mt-8"
                >
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center text-[#ECDFCC]">Frequently Asked Questions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { q: "What are your opening hours?", a: "We're open Monday to Friday from 7 AM to 8 PM, and weekends from 8 AM to 6 PM." },
                                { q: "Do you offer catering services?", a: "Yes, we offer catering for events of all sizes. Please contact us for more information." },
                                { q: "Are your coffee beans ethically sourced?", a: "Absolutely! We pride ourselves on sourcing our beans from fair trade certified farms." },
                                { q: "Do you have vegetarian/vegan options?", a: "Yes, we have a variety of vegetarian and vegan options on our menu." },
                            ].map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-[#034c52] p-6 rounded-lg shadow-lg"
                                >
                                    <h3 className="text-xl font-semibold mb-2 text-[#ECDFCC]">{faq.q}</h3>
                                    <p className="text-[#ECDFCC]">{faq.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Footer */}
            <footer className="bg-[#023c41] text-[#ECDFCC] py-8 px-4">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold mb-2">ACafe</h3>
                        <p className="text-sm">Brewing perfection since 2010</p>
                    </div>
                    <div className="container mx-auto mt-8 text-center text-sm">
                        <p>&copy; 2024 ACafe. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a className="hover:text-white transition-colors"><Facebook size={24} /></a>
                        <a className="hover:text-white transition-colors"><Instagram size={24} /></a>
                        <a className="hover:text-white transition-colors"><Twitter size={24} /></a>
                    </div>
                </div>
            </footer>
        </motion.div>
    );
};

export default ContactUsPage;