import React from "react";
import { motion } from "framer-motion";
import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandReact,
  TbBrandGit,
  TbBrandTailwind,
  TbBrandBootstrap,
  TbBrandRedux,
  TbBrandFirebase,
  TbBrandAws,
  TbBrandTypescript,
} from "react-icons/tb";
import {
  // SiZustand,
  SiReactrouter,
  // SiRecharts,
  SiMysql,
  // SiJava,
  SiPython,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Tooltip as ReactTooltip } from "react-tooltip";

const iconVariants = (delay) => ({
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0, transition: { delay, duration: 0.5 } },
});

const Technologies = () => {
  const techs = [
    {
      icon: <TbBrandHtml5 className="text-7xl text-amber-500" />,
      name: "HTML5",
    },
    { icon: <TbBrandCss3 className="text-7xl text-blue-500" />, name: "CSS3" },
    {
      icon: <TbBrandJavascript className="text-7xl text-yellow-500" />,
      name: "JavaScript",
    },
    {
      icon: <TbBrandReact className="text-7xl text-blue-400" />,
      name: "React JS",
    },
    { icon: <TbBrandGit className="text-7xl text-red-500" />, name: "Git" },
    {
      icon: <TbBrandTailwind className="text-7xl text-blue-300" />,
      name: "Tailwind CSS",
    },
    {
      icon: <TbBrandBootstrap className="text-7xl text-purple-500" />,
      name: "Bootstrap",
    },
    {
      icon: <TbBrandRedux className="text-7xl text-purple-600" />,
      name: "Redux",
    },
    // {
    //   icon: <SiZustand className="text-7xl text-orange-500" />,
    //   name: "Zustand",
    // },
    {
      icon: <SiReactrouter className="text-7xl text-red-600" />,
      name: "React Router DOM",
    },
    // {
    //   icon: <SiRecharts className="text-7xl text-blue-500" />,
    //   name: "Recharts",
    // },
    {
      icon: <TbBrandFirebase className="text-7xl text-yellow-500" />,
      name: "Firebase",
    },
    { icon: <SiMysql className="text-7xl text-blue-600" />, name: "SQL" },
    { icon: <FaJava className="text-7xl text-red-500" />, name: "Java" },
    { icon: <SiPython className="text-7xl text-blue-400" />, name: "Python" },
    { icon: <TbBrandAws className="text-7xl text-orange-500" />, name: "AWS" },
    {
      icon: <TbBrandTypescript className="text-7xl text-blue-500" />,
      name: "TypeScript",
    },
  ];

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
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(index * 0.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-400 p-4"
            data-tooltip-id="tech-tooltip"
            data-tooltip-content={tech.name}
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>
      <ReactTooltip id="tech-tooltip" />
    </div>
  );
};

export default Technologies;
