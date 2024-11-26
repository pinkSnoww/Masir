import React from 'react';
import { motion } from 'framer-motion';
import './Carousel.css'; // Make sure to create a CSS file for styling

const Carousel = ({ items }) => {
    return (
        <div className="carousel-container">
            <motion.div
                className="carousel"
                drag="x"
                dragConstraints={{ left: -1000, right: 0 }}
                whileTap={{ cursor: "grabbing" }}
            >
                {items.map((item, index) => (
                    <motion.div className="carousel-item" key={index}>
                        {item}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Carousel;
