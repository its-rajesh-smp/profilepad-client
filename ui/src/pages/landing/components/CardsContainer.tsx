import { motion } from "framer-motion";

export const authPageFloatingItems = [
  "https://bento.me/images/widgets/twitter.png",
  "https://bento.me/images/widgets/figma.png",
  "https://bento.me/images/widgets/linkedin.png",
  "https://cdn.prod.website-files.com/6335b33630f88833a92915fc/63e91b425b939f59bea307ec_substackwidget2-p-500.png",
  "https://cdn.prod.website-files.com/6335b33630f88833a92915fc/63ea7d42d96b453e6c24c20f_hero%20buymeacoffee-p-500.png",
  "https://cdn.prod.website-files.com/6335b33630f88833a92915fc/63ebce23e53ac60a7fa7bd43_hero%20youtube.png",
];

function CardsContainer() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
      className="fixed hidden h-screen w-screen overflow-hidden lg:block"
    >
      <div className="absolute left-[5%] top-[5%] rotate-6 transform rounded-3xl border">
        <img className="h-44 w-44" src={authPageFloatingItems[0]} />
      </div>
      <div className="absolute left-[8%] top-[30%] -rotate-3 scale-110 transform rounded-3xl border">
        <img className="h-44 w-44" src={authPageFloatingItems[1]} />
      </div>
      <div className="absolute left-[1%] top-[60%] rotate-12 transform rounded-3xl border">
        <img className="h-44 w-44" src={authPageFloatingItems[2]} />
      </div>
      <div className="absolute right-[5%] top-[0%] -rotate-6 transform rounded-3xl border">
        <img className="h-44 w-44" src={authPageFloatingItems[3]} />
      </div>
      <div className="absolute right-[10%] top-[20%] rotate-3 scale-125 transform rounded-3xl border">
        <img className="h-44 w-44" src={authPageFloatingItems[4]} />
      </div>
      <div className="rotate-8 absolute right-[10%] top-[60%] transform rounded-3xl border">
        <img className="h-44 w-44" src={authPageFloatingItems[5]} />
      </div>
    </motion.div>
  );
}

export default CardsContainer;
