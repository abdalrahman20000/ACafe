import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ShoppingCart, X, Trash2, Plus, Minus, Facebook, Instagram, Twitter, ArrowLeft, Check, CheckCircle } from 'lucide-react';
import { addToCart, removeFromCart, updateQuantity, clearDeletedProducts } from '../redux/cartSlice';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ShoppingMarket = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [items, setItems] = useState([]);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

    useEffect(() => {
        const fetchProducts = () => {
            const storedProducts = JSON.parse(localStorage.getItem('products'));
            if (storedProducts && storedProducts.length > 0) {
                setItems(storedProducts);

                const deletedProductIds = cart.filter(cartItem =>
                    !storedProducts.some(product => product.id === cartItem.id)
                ).map(item => item.id);

                if (deletedProductIds.length > 0) {
                    dispatch(clearDeletedProducts(deletedProductIds));
                }
            }
        };

        fetchProducts();
        const intervalId = setInterval(fetchProducts, 5000);
        return () => clearInterval(intervalId);
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleCheckout = () => {
        setIsConfirmOpen(true);
    };

    const confirmOrder = () => {
        setIsConfirmOpen(false);
        setIsOrderConfirmed(true);
        dispatch(clearCart());
    };

    const closeOrderConfirmation = () => {
        setIsOrderConfirmed(false);
        setIsCartOpen(false);
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#034c52]">
            {/* Fixed Cart Button */}
            <motion.button
                className="fixed top-4 right-4 z-50 p-2 bg-[#ECDFCC] text-[#034c52] rounded-full shadow-lg hover:bg-[#d8c9b3] transition-colors"
                onClick={() => setIsCartOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <ShoppingCart size={24} />
                {totalItems > 0 && (
                    <motion.span
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    >
                        {totalItems}
                    </motion.span>
                )}
            </motion.button>

            {/* Header */}
            <header className="bg-[#023c41] text-[#ECDFCC] p-4 shadow-md">
                <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                    <div className="flex items-center mb-2 sm:mb-0">
                        <motion.button
                            onClick={() => {navigate("/ACafe")}}
                            className="mr-4 text-[#ECDFCC] hover:text-white transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ArrowLeft size={24} />
                        </motion.button>
                        <h1 className="text-2xl font-bold">ACafe</h1>
                    </div>
                    <p className="text-center text-sm sm:text-base italic">"Brew your day with a perfect cup of joy"</p>
                    <div className="w-24"></div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold text-[#ECDFCC] text-center mb-8">Our Menu</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {items.map((item) => (
                        <motion.div
                            key={item.id}
                            className="relative h-64 rounded-lg shadow-md overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold text-[#ECDFCC]">{item.title}</h3>
                                    <p className="text-[#ECDFCC] text-sm">{item.description}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold text-[#ECDFCC]">${item.price.toFixed(2)}</span>
                                    <motion.button
                                        className="bg-[#ECDFCC] text-[#034c52] py-2 px-4 rounded hover:bg-[#d8c9b3] transition-colors"
                                        onClick={() => dispatch(addToCart(item))}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        Add to Cart
                                    </motion.button>
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

            {/* Cart Sidebar */}
            <div className={`fixed inset-y-0 right-0 w-full max-w-md bg-[#034c52] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="h-full flex flex-col">
                    <div className="p-6 bg-[#023c41] text-[#ECDFCC]">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold">Your Cart</h2>
                            <button
                                className="text-[#ECDFCC] hover:text-white"
                                onClick={() => setIsCartOpen(false)}
                            >
                                <X size={24} />
                            </button>
                        </div>
                    </div>
                    <div className="flex-grow overflow-y-auto p-6">
                        {cart.length === 0 ? (
                            <p className="text-[#ECDFCC] text-center">Your cart is empty</p>
                        ) : (
                            <ul className="space-y-4">
                                {cart.map((item) => (
                                    <li key={item.id} className="bg-[#ECDFCC] rounded-lg shadow-md overflow-hidden">
                                        <div className="relative h-40">
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-between">
                                                <div>
                                                    <h3 className="font-semibold text-[#ECDFCC] text-lg">{item.title}</h3>
                                                    <p className="text-[#ECDFCC]">${item.price.toFixed(2)}</p>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center bg-[#034c52] rounded-full">
                                                        <button onClick={() => dispatch(updateQuantity({ id: item.id, change: -1 }))} className="text-[#ECDFCC] p-2">
                                                            <Minus size={16} />
                                                        </button>
                                                        <span className="mx-2 text-[#ECDFCC]">{item.quantity}</span>
                                                        <button onClick={() => dispatch(updateQuantity({ id: item.id, change: 1 }))} className="text-[#ECDFCC] p-2">
                                                            <Plus size={16} />
                                                        </button>
                                                    </div>
                                                    <button
                                                        className="text-red-500 hover:text-red-700 bg-[#ECDFCC] p-2 rounded-full"
                                                        onClick={() => dispatch(removeFromCart(item.id))}
                                                    >
                                                        <Trash2 size={20} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="p-6 bg-[#023c41]">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-semibold text-[#ECDFCC]">Total:</span>
                            <span className="text-xl font-bold text-[#ECDFCC]">
                                ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
                            </span>
                        </div>
                        <button
                            className="w-full bg-[#ECDFCC] text-[#034c52] py-3 rounded-lg hover:bg-[#d8c9b3] transition-colors"
                            onClick={handleCheckout}
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            </div>

            {/* Confirmation Modal */}
            <AnimatePresence>
                {isConfirmOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white p-6 rounded-lg max-w-md w-full"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                            <h2 className="text-2xl font-bold mb-4 text-[#034c52]">Confirm Your Order</h2>
                            <div className="py-4">
                                <h3 className="font-semibold mb-2 text-[#034c52]">Order Summary:</h3>
                                <ul className="space-y-2">
                                    {cart.map((item) => (
                                        <li key={item.id} className="flex justify-between text-[#034c52]">
                                            <span>{item.title} x {item.quantity}</span>
                                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-4 font-bold text-[#034c52]">
                                    Total: ${totalPrice.toFixed(2)}
                                </div>
                            </div>
                            <div className="flex justify-between mt-6">
                                <motion.button
                                    className="text-gray-500 hover:text-gray-700 flex items-center"
                                    onClick={() => setIsConfirmOpen(false)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <X className="mr-2" size={18} /> Cancel
                                </motion.button>
                                <motion.button
                                    className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 flex items-center"
                                    onClick={confirmOrder}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <CheckCircle className="mr-2" size={18} /> Confirm Order
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Order Confirmation Modal */}
            {isOrderConfirmed && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg max-w-md w-full text-center">
                        <Check size={48} className="mx-auto mb-4 text-green-500" />
                        <h2 className="text-xl font-bold mb-2">Order Confirmed</h2>
                        <p className="text-lg mb-6">Your order is being delivered!</p>
                        <button
                            className="text-green-500 hover:text-green-700 font-bold flex items-center justify-center w-full"
                            onClick={closeOrderConfirmation}
                        >
                            <CheckCircle className="mr-2" size={18} /> Done
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShoppingMarket;