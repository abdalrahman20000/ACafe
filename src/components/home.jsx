import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Coffee, Star, ChevronRight, ShoppingCart, Menu, X, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const trendingProductss = [
    { id: 1, title: "Espresso", description: "Rich and bold single shot", image: "https://i.pinimg.com/736x/cb/ee/ab/cbeeabf1e1eee5882e145f3465ada74d.jpg", price: 2.50 },
    { id: 2, title: "Cappuccino", description: "Espresso with steamed milk and foam", image: "https://i.pinimg.com/564x/4b/65/98/4b6598e5aac6d15608d1459f9a96cc79.jpg", price: 3.50 },
    { id: 3, title: "Latte", description: "Espresso with lots of steamed milk", image: "https://i.pinimg.com/564x/3b/de/66/3bde660eede0b425a992199c479556c2.jpg", price: 3.75 },
    { id: 4, title: "Mocha", description: "Espresso with chocolate and steamed milk", image: "https://img.freepik.com/free-photo/dark-chocolate-mocha-frothy-indulgence-saucer-generated-by-ai_188544-22903.jpg", price: 4.00 },
    { id: 5, title: "Croissant", description: "Buttery, flaky pastry", image: "https://i.pinimg.com/564x/8b/34/39/8b3439a82c12879719290dc04da5a05b.jpg", price: 2.25 },
    { id: 6, title: "Blueberry Muffin", description: "Moist muffin loaded with blueberries", image: "https://i.pinimg.com/564x/ac/ba/46/acba46775b46a9966d956cf524cd84b9.jpg", price: 2.75 },
    { id: 7, title: "Cheesecake", description: "Creamy New York style cheesecake", image: "https://i.pinimg.com/564x/92/f3/5e/92f35eaaf2ae0c0ca545e79e1f531516.jpg", price: 4.50 },
    { id: 8, title: "Iced Tea", description: "Refreshing black tea over ice", image: "https://img.pikbest.com/wp/202345/mint-leaves-cup-with-ice-tea-and-on-a-dark-background_9585688.jpg!bw700", price: 2.00 },
    { id: 9, title: "Fruit Smoothie", description: "Blend of seasonal fruits", image: "https://png.pngtree.com/background/20230610/original/pngtree-this-smoothie-shake-contains-blackberries-picture-image_3024300.jpg", price: 4.25 },
    { id: 10, title: "Pancakes", description: "Fluffy pancakes with maple syrup", image: "https://i.pinimg.com/564x/6d/e1/a8/6de1a8ddb5b3b0234cc21c1befafd7aa.jpg", price: 3.75 },
    { id: 11, name: "Americano", description: "A drink of similar volume and strength to regular coffee", price: 3.50, rating: 4.5, image: "https://img.freepik.com/premium-photo/cup-coffee-black-background-top-view-coffee-black-cup-with-golden-pattern-black-table_183577-1264.jpg" },
];

const testimonials = [
    { id: 1, name: "Sarah L.", text: "ACafe's coffee is the highlight of my mornings. Absolutely delicious!", rating: 5, image: "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png" },
    { id: 2, name: "Mike R.", text: "Great atmosphere and even better coffee. My new favorite spot!", rating: 4, image: "https://www.w3schools.com/howto/img_avatar.png" },
    { id: 3, name: "Emily T.", text: "The staff is so friendly and the pastries are to die for!", rating: 5, image: "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png" },
    { id: 4, name: "John D.", text: "I love the variety of coffee beans they offer. A true coffee lover's paradise!", rating: 5, image: "https://www.w3schools.com/howto/img_avatar.png" },
    { id: 5, name: "Lisa M.", text: "Their latte art is Instagram-worthy! Tastes as good as it looks.", rating: 4, image: "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png" },
    { id: 6, name: "Alex B.", text: "The ambiance is perfect for both work and casual meetups.", rating: 5, image: "https://www.w3schools.com/howto/img_avatar.png" },
    { id: 7, name: "Sophie W.", text: "I'm addicted to their cold brew. Perfect for hot summer days!", rating: 5, image: "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png" },
    { id: 8, name: "David K.", text: "The baristas really know their stuff. Always happy to explain different brews.", rating: 4, image: "https://www.w3schools.com/howto/img_avatar.png" },
    { id: 9, name: "Emma S.", text: "Love their commitment to sustainability. Makes the coffee taste even better!", rating: 5, image: "https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png" },
    { id: 10, name: "Tom H.", text: "Best coffee shop in town, hands down. Can't start my day without ACafe!", rating: 5, image: "https://www.w3schools.com/howto/img_avatar.png" },
];

const HomePage = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products'));
        if (storedProducts && storedProducts.length > 0) {
            setProducts(storedProducts);
        } else {
            setProducts(trendingProductss);
            localStorage.setItem('products', JSON.stringify(trendingProductss));
        }
    }, []);

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

            {/* Hero Section */}
            <section className="py-20 px-4 bg-[url('https://img.freepik.com/premium-photo/top-view-green-desk-with-coffee-cup-leaves-calm-workspace-concept_1235831-94122.jpg?w=900')] bg-cover bg-center">
                <div className="container mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-bold mb-4"
                    >
                        Discover the Perfect Brew
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl mb-8"
                    >
                        Artisanal coffee crafted with passion, served with love
                    </motion.p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#ECDFCC] text-[#034c52] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#d8c9b3] transition-colors"
                        onClick={() => navigate('/auth')}
                    >
                        Join Now
                    </motion.button>
                </div>
            </section>

            {/* Trending Products Section */}
            <section className="pb-16 pt-8 px-4">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Trending Products</h2>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                        }}
                        className='h-fit pb-10 pt-3 px-4'
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-[#ECDFCC] rounded-lg overflow-hidden shadow-lg h-80"
                                // onClick={() => navigate('/auth')}
                                >
                                    <div className="relative h-full">
                                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                                            <h3 className="text-white font-semibold text-lg mb-2">{product.title}</h3>
                                            <div className="flex justify-between items-center">
                                                <span className="text-white font-bold">${product.price.toFixed(2)}</span>
                                                <div className="flex items-center">
                                                    <Star className="text-yellow-400 mr-1" size={16} />
                                                    <span className="text-white">{product.rating}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 px-4 bg-[#023c41]">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        className='h-fit pb-10 pt-3 px-4'
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-[#ECDFCC] p-6 rounded-lg shadow-lg h-full flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center mb-4">
                                            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 object-cover" />
                                            <div>
                                                <h3 className="text-[#034c52] font-semibold">{testimonial.name}</h3>
                                                <div className="flex">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <Star key={i} className="text-yellow-400" size={16} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-[#034c52] italic flex-grow">{testimonial.text}</p>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Coffee Education Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Coffee Education</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-[#ECDFCC] p-6 rounded-lg shadow-lg overflow-hidden"
                        >
                            <div className="flex items-center mb-4">
                                <img src="https://images.assetsdelivery.com/compings_v2/alexandraromanova/alexandraromanova1909/alexandraromanova190900060.jpg" alt="Brewing Techniques" className="w-1/3 h-32 object-cover rounded-lg mr-4" />
                                <div>
                                    <h3 className="text-[#034c52] text-xl font-semibold mb-2">Brewing Techniques</h3>
                                    <p className="text-[#034c52] mb-4">Learn about different brewing methods and how they affect the taste of your coffee.</p>
                                    <a href="https://avtbeverages.com/blog/coffee-brewing-methods-11-ways-to-brew-coffee/" target='blank'>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center text-[#034c52] font-semibold"
                                        >
                                            Learn More <ChevronRight size={20} />
                                        </motion.button>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-[#ECDFCC] p-6 rounded-lg shadow-lg overflow-hidden"
                        >
                            <a href="https://www.ncausa.org/About-Coffee/History-of-Coffee"
                                target='blank'>
                                <div className="flex items-center mb-4">
                                    <img src="https://www.vermaoffset.com/wp-content/uploads/2024/05/61-copy-2.jpg" alt="Coffee Origins" className="w-1/3 h-32 object-cover rounded-lg mr-4" />
                                    <div>
                                        <h3 className="text-[#034c52] text-xl font-semibold mb-2">Coffee Origins</h3>
                                        <p className="text-[#034c52] mb-4">Discover the unique flavors and characteristics of coffee from different regions around the world.</p>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center text-[#034c52] font-semibold"
                                        >
                                            Explore Origins <ChevronRight size={20} />
                                        </motion.button>
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Sustainability Section */}
            <section className="py-16 px-4 bg-[#023c41]">
                <div className="container mx-auto flex flex-col items-center">
                    <h2 className="text-3xl font-bold mb-8 text-center">Our Commitment to Sustainability</h2>
                    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full md:w-1/2 mb-8 md:mb-0"
                        >
                            <img src="https://t4.ftcdn.net/jpg/07/21/95/33/360_F_721953350_XYLftkGkKMu9rpqtxWXPLXefSDTlXJOP.jpg" alt="Sustainability" className="rounded-lg shadow-lg w-full" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full md:w-1/2 md:pl-8"
                        >
                            <h3 className="text-2xl font-semibold mb-4">Eco-Friendly Practices</h3>
                            <p className="mb-4">At ACafe, we're committed to reducing our environmental impact. From sourcing sustainable beans to using eco-friendly packaging, we strive to make a positive difference.</p>
                            <ul className="list-disc list-inside mb-4">
                                <li>100% compostable cups and lids</li>
                                <li>Fair trade certified coffee beans</li>
                                <li>Energy-efficient equipment in all our cafes</li>
                            </ul>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#ECDFCC] text-[#034c52] px-14 py-2 rounded-full font-semibold hover:bg-[#d8c9b3] transition-colors"
                            >
                                Eco-friendly
                            </motion.button>
                        </motion.div>
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
        </div>
    );
};

export default HomePage;