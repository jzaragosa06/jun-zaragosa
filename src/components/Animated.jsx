import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Array of content items with different types and sizes
const contentItems = [
    {
        type: "image",
        src: "https://static.vecteezy.com/system/resources/previews/008/926/993/non_2x/black-cat-with-green-eyes-peeking-out-vector.jpg",
        alt: "Cat Avatar",
        className: "w-64 h-64 object-contain"
    },
    {
        type: "text",
        content: "Programmer | Scholar",
        className: "text-4xl font-bold text-gray-800"
    },
    {
        type: "image",
        src: "https://t4.ftcdn.net/jpg/02/22/47/85/360_F_222478566_O95CFavH8wKiXFFcaRjxNQ19yDsvaw6o.jpg",
        alt: "Placeholder",
        className: "w-80 h-80 object-cover"
    },
    {
        type: "text",
        content: "Backend • Data Analysis • Solving",
        className: "text-3xl font-bold text-gray-800"
    },
    {
        type: "image",
        src: "https://t4.ftcdn.net/jpg/05/58/96/05/360_F_558960596_GmZ6UAW8IyMYUGYEGBu5wL8HOtfqneH0.jpg",
        alt: "Square Placeholder",
        className: "w-80 h-80 object-cover"
    },
    {
        type: "text",
        content: "Python | Laravel | PHP",
        className: "text-3xl font-bold text-gray-800"
    }
];

const ContentItem = ({ item }) => {
    return (
        <motion.div
            className="flex items-center justify-center h-full bg-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8 }}
        >
            {item.type === "image" ? (
                <img
                    src={item.src}
                    alt={item.alt}
                    className={item.className}
                />
            ) : (
                <div className={item.className}>{item.content}</div>
            )}
        </motion.div>
    );
};

function AnimatedGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % contentItems.length);
        }, 3000); // Rotate every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-96 overflow-hidden">
            <AnimatePresence mode="wait">
                <ContentItem
                    key={currentIndex}
                    item={contentItems[currentIndex]}
                />
            </AnimatePresence>

            {/* Optional navigation dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {contentItems.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-black' : 'bg-gray-400'}`}
                        aria-label={`Go to item ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default AnimatedGallery;