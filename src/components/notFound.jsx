import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Coffee, ChevronRight } from 'lucide-react';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#034c52] text-[#ECDFCC] px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8 max-w-lg mx-auto"
      >
        <div className="flex items-center justify-center space-x-4">
          <motion.div
            initial={{ rotate: -20 }}
            animate={{ rotate: 20 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          >
            <Coffee size={64} className="text-[#ECDFCC]" />
          </motion.div>
          <h1 className="text-6xl sm:text-8xl font-bold">404</h1>
          <motion.div
            initial={{ rotate: 20 }}
            animate={{ rotate: -20 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          >
            <Coffee size={64} className="text-[#ECDFCC]" />
          </motion.div>
        </div>
        <h2 className="text-2xl sm:text-4xl font-semibold">Looks like you got lost</h2>
        <p className="text-lg sm:text-xl">The page you're looking for doesn't exist. Let's get you back on track.</p>
      </motion.div>

      {/* Centering the button vertically */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex items-center justify-center mt-8"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className="bg-[#ECDFCC] text-[#034c52] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#d8c9b3] transition-colors flex items-center"
        >
          Go Back Home <ChevronRight size={20} />
        </motion.button>
      </motion.div>

      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-no-repeat bg-contain bg-[url('https://img.freepik.com/free-photo/top-view-green-desk-with-coffee-cup-leaves-calm-workspace-concept_1235831-94122.jpg')] -z-10 bg-center sm:bg-cover"
      />
    </div>
  );
};

export default NotFoundPage;
