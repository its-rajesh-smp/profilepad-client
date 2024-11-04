import { motion } from "framer-motion";

function getRandomAnimation() {
  return {
    y: Array.from({ length: 5 }, () => Math.floor(Math.random() * 20) - 10), // Random y values between -10 and 10
    x: Array.from({ length: 5 }, () => Math.floor(Math.random() * 10) - 5), // Random x values between -5 and 5
    rotate: Array.from({ length: 5 }, () => Math.floor(Math.random() * 10) - 5), // Random rotation between -5 and 5 degrees
  };
}

function FloatingElement() {
  return (
    <motion.div
      animate={getRandomAnimation()}
      transition={{
        duration: 6, // Adjust duration for one full cycle
        repeat: Infinity, // Infinite loop
        repeatType: "mirror",
        // ease: "easeInOut", // Smooth easing for fluid motion
      }}
      style={{
        display: "inline-block", // Style to center the element if needed
        padding: "20px",
        backgroundColor: "lightblue",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      FloatingElement
    </motion.div>
  );
}

export default FloatingElement;
