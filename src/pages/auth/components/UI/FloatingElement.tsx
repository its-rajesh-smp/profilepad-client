import { motion } from "framer-motion";

function getRandomAnimation() {
  return {
    y: Array.from({ length: 5 }, () => Math.floor(Math.random() * 50) - 25), // Random y values between -25 and 25
    x: Array.from({ length: 5 }, () => Math.floor(Math.random() * 30) - 15), // Random x values between -15 and 15
    rotate: Array.from(
      { length: 5 },
      () => Math.floor(Math.random() * 20) - 10,
    ), // Random rotation between -10 and 10 degrees
    scale: Array.from({ length: 5 }, () => 0.9 + Math.random() * 0.2), // Random scale between 0.9 and 1.1
    opacity: Array.from({ length: 5 }, () => 0.8 + Math.random() * 0.2), // Random opacity between 0.8 and 1.0
  };
}
function FloatingElement() {
  return (
    <motion.div
      animate={getRandomAnimation()}
      transition={{
        duration: 10, // Adjust duration for one full cycle
        repeat: Infinity, // Infinite loop
        repeatType: "mirror",
        ease: "easeInOut", // Smooth easing for fluid motion
      }}
      style={{
        display: "inline-block", // Style to center the element if needed
        padding: "20px",
        backgroundColor: "lightblue",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        alt="Floating Image"
      />
    </motion.div>
  );
}

export default FloatingElement;
