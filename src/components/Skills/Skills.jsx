import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faJsSquare,
  faPython,
  faGitAlt,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  SiDjango,
  SiExpress,
  SiAngular,
  SiMysql,
  SiMongodb,
  SiJira,
  SiPostman,
  SiStorybook,
} from "react-icons/si";
import { FaBitbucket } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { icon: faJsSquare, name: "JavaScript", color: "#F7DF1E" },
    { icon: faReact, name: "React", color: "#61DAFB" },
    { icon: SiStorybook, name: "Storybook", color: "#ff4885"},
    { icon: SiAngular, name: "Angular", color: "#DD0031" },
    { icon: faNodeJs, name: "Node.js", color: "#339933" },
    { icon: SiExpress, name: "Express", color: "#ffffff" },
    { icon: faPython, name: "Python", color: "#3776AB" },
    { icon: SiDjango, name: "Django", color: "#FF6C37" },
    { icon: SiMysql, name: "MySQL", color: "#4479A1" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: faGitAlt, name: "Git", color: "#F05032" },
    { icon: faGithub, name: "GitHub", color: "#ffffff" },
    { icon: FaBitbucket, name: "Bitbucket", color: "#205081" },
    { icon: SiJira, name: "Jira", color: "#0052CC" },
    { icon: SiPostman, name: "Postman", color: "#FF6C37" },
  ];

  const tumblingVariants = {
    initial: { rotate: 0 },
    hover: {
      rotate: [0, -15, 15, 0],
      transition: {
        duration: 1,
        ease: "easeInOut",
        times: [0, 0.33, 0.66, 1],
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          My Skills
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -10 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center">
              <motion.div
                variants={tumblingVariants}
                initial="initial"
                whileHover="hover"
                className="w-24 h-24 flex items-center justify-center bg-gray-800 rounded-full shadow-lg mb-4">
                {skill.icon && skill.icon.prefix ? (
                  <FontAwesomeIcon
                    icon={skill.icon}
                    className="text-5xl"
                    style={{ color: skill.color }}
                  />
                ) : (
                  <skill.icon
                    className="text-5xl"
                    style={{ color: skill.color }}
                  />
                )}
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-semibold">
                {skill.name}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
