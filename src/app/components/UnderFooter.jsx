"use client";

import { motion } from "framer-motion";

export default function UnderFooter() {
  const scrollRightToLeft = {
    animate: {
      x: [100, -10000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 250,
          ease: "linear",
        },
      },
    },
  };

  const scrollLeftToRight = {
    animate: {
      x: [-10000, 100],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 250,
          ease: "linear",
        },
      },
    },
  };

  const repeatedText1 = "LET THE POWER OF AI BE WITH YOU ".repeat(20);
  const repeatedText2 = "INCREASE YOUR SKILLS AND SAVE TIME ".repeat(20);

  return (
    <div className="overflow-hidden">
      <motion.div
        className="footer whitespace-nowrap"
        variants={scrollRightToLeft}
        animate="animate"
      >
        {repeatedText1}
      </motion.div>
      <motion.div
        className="footer whitespace-nowrap font-outline"
        variants={scrollLeftToRight}
        animate="animate"
      >
        {repeatedText2}
      </motion.div>
    </div>
  );
}
