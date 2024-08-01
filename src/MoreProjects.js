import React from "react";
import { motion } from "framer-motion";

const moreProjects = [
  {
    title: "Blog Platform",
    description:
      "A blog platform with user authentication and CRUD operations.",
    sourceCode: "https://github.com/yourusername/blog-platform",
    liveSite: "https://yourblogplatform.com",
    course: "Web Development Bootcamp",
    comments: "Learned about user authentication and advanced routing.",
    image: "https://via.placeholder.com/300",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my skills and projects.",
    sourceCode: "https://github.com/yourusername/portfolio-website",
    liveSite: "https://yourportfolio.com",
    course: "Personal Project",
    comments: "This was a great way to learn Tailwind CSS and React!",
    image: "https://via.placeholder.com/300",
    tags: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "E-commerce Store",
    description: "An online store built with React and Node.js.",
    sourceCode: "https://github.com/yourusername/ecommerce-store",
    liveSite: "https://yourecommerce.com",
    course: "Full-Stack Development Course",
    comments: "I learned a lot about state management and API integration.",
    image: "https://via.placeholder.com/300",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Chat Application",
    description: "A real-time chat application using WebSocket.",
    sourceCode: "https://github.com/yourusername/chat-app",
    liveSite: "https://yourchatapp.com",
    course: "Advanced JavaScript Course",
    comments:
      "This project helped me understand WebSocket and real-time communication.",
    image: "https://via.placeholder.com/300",
    tags: ["WebSocket", "JavaScript", "Node.js"],
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my skills and projects.",
    sourceCode: "https://github.com/yourusername/portfolio-website",
    liveSite: "https://yourportfolio.com",
    course: "Personal Project",
    comments: "This was a great way to learn Tailwind CSS and React!",
    image: "https://via.placeholder.com/300",
    tags: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "E-commerce Store",
    description: "An online store built with React and Node.js.",
    sourceCode: "https://github.com/yourusername/ecommerce-store",
    liveSite: "https://yourecommerce.com",
    course: "Full-Stack Development Course",
    comments: "I learned a lot about state management and API integration.",
    image: "https://via.placeholder.com/300",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Chat Application",
    description: "A real-time chat application using WebSocket.",
    sourceCode: "https://github.com/yourusername/chat-app",
    liveSite: "https://yourchatapp.com",
    course: "Advanced JavaScript Course",
    comments:
      "This project helped me understand WebSocket and real-time communication.",
    image: "https://via.placeholder.com/300",
    tags: ["WebSocket", "JavaScript", "Node.js"],
  },
];

const MoreProjects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          All Projects
        </motion.h2>
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {moreProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg glow-on-hover">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-lg mb-4">{project.description}</p>
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline">
                Source Code
              </a>
              <br />
              <a
                href={project.liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline">
                Live Website
              </a>
              <p className="text-sm text-gray-400 mt-2">
                Course: {project.course}
              </p>
              <p className="text-sm text-gray-300 mt-2">{project.comments}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-700 text-gray-300 text-xs font-semibold px-2 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MoreProjects;
