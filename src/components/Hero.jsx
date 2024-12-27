import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 flex justify-center w-full">
      
        <div className="flex justify-center">
          <div className="w-full text-center">
            <div className="flex flex-col items-center">
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-black"
              >
                Центр социальных технологий
              </motion.h1>
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="text-green-600 bg-clip-text text-3xl tracking-tight"
              >
                ФИНАНСОВЫЕ ТЕХНОЛОГИИ ДЛЯ ВАШЕГО УСПЕХА
              </motion.span>
              <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-6 font-light tracking-tighter"
              >
                {HERO_CONTENT}
              </motion.p>
            </div>
          </div>
          
        </div>
      
    </div>
  );
};

export default Hero;
