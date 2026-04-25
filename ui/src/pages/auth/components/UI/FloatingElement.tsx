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
function FloatingElement({ src }: { src: string }) {
  return (
    <motion.div
      animate={getRandomAnimation()}
      transition={{
        duration: 10, // Adjust duration for one full cycle
        repeat: Infinity, // Infinite loop
        repeatType: "mirror",
        ease: "easeInOut", // Smooth easing for fluid motion
      }}
      className="overflow-hidden rounded-[2rem] border shadow"
    >
      <img src={src} alt="Floating Image" />
    </motion.div>
  );
}

export default FloatingElement;
