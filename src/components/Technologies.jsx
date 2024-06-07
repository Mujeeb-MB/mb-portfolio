import React from "react";
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { RiBootstrapFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { SiReactquery } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        <span className="text-amber-400">Tech</span>nologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4"
        >
          <TbBrandHtml5 className="text-7xl text-amber-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4"
        >
          <TbBrandCss3 className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4"
        >
          <RiBootstrapFill className="text-7xl text-violet-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(9)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4"
        >
          <TbBrandJavascript className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4"
        >
          <SiReactquery className="text-7xl text-red-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-400 p-4"
        >
          <SiReactrouter className="text-7xl text-red-900" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
