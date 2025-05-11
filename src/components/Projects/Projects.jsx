import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img0 from "../../img/img0.png";
import img8 from "../../img/img8.png";
import img6 from "../../img/img6.png";
const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A space I created to show my skills, certificates, and projects and as a reference for job applications.",
    sourceCode: "https://github.com/hiralinda/hireligia",
    liveSite: "https://hiralinda.github.io/hireligia/",
    course: "Personal Project",
    comments:
      "It was my first time digging into Blender and 3D objects displayed on webpages.",
    image: img0,
    tags: ["React", "TailwindCSS", "Three.js", "Blender"],
  },
  {
    title: "NGO Landing Page",
    description:
      "Multilingual website for a global educational NGO, built to showcase programs, testimonials, and ways to get involved.",
    sourceCode: "Private Repository",
    liveSite: "https://xoxoeducation.com/",
    course: "Volunteering",
    comments:
      "Led front-end development and content structuring, implemented i18n support for English and Portuguese, and optimized user experience across pages like 'Who We Are', 'Testimonials', 'Contribute', and 'Impact'.",
    image: img8,
    tags: ["React", "Internationalization", "Multilingual", "ResponsiveDesign"],
  },
  {
    title: "Ballet Studio Website",
    description:
      "Elegant, responsive website for a ballet studio, designed with a soft pink and white theme. Includes an autoplaying homepage carousel, a filterable class schedule, and multimedia galleries with lightbox functionality.",
    sourceCode: "Private Repository",
    liveSite: "https://www.giselealbanodancas.com.br/",
    course: "Freelance",
    comments:
      "Handled full development and deployment. Implemented Material-UI for styling, dynamic schedule filters, and lightbox media viewing for a clean user experience.",
    image: img6,
    tags: [
      "React",
      "Material-UI",
      "ResponsiveDesign",
      "Lightbox",
      "FilterableSchedule",
    ],
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-extrabold py-1 mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          My Projects
        </motion.h2>
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
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
              {project.sourceCode === "Private Repository" ? (
                <span className="text-gray-400">Private Repository</span>
              ) : (
                <Link
                  to={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline">
                  Source Code
                </Link>
              )}
              <br />
              <a
                href={project.liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline">
                {project.liveSite.includes("youtu")
                  ? "Video Demo"
                  : "Live Website"}
              </a>
              <p className="text-sm text-gray-400 mt-2">
                {/* {project.course !== "Personal Project" && "Course: "} */}
                {project.course}
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
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center">
          <Link to="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-bold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
              View More Projects
            </motion.button>
          </Link>
        </motion.div> */}
      </div>
    </motion.div>
  );
};

export default Projects;
