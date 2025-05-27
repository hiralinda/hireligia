import React, { useEffect } from "react";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import img0 from "./img/img0.png";
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import img4 from "./img/img4.png";
import img5 from "./img/img5.png";
import img6 from "./img/img6.png";
import img7 from "./img/img7.png";
import img8 from "./img/img8.png";

const moreProjects = [
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
  {
    title: "Retro Rock Paper Scissors Lizard Spock",
    description:
      'This project is a retro-styled implementation of the game "Rock Paper Scissors Lizard Spock".',
    sourceCode:
      "https://github.com/hiralinda/odin-rock-paper-scissor-lizard-spock",
    liveSite:
      "https://hiralinda.github.io/odin-rock-paper-scissor-lizard-spock/",
    course: "The Odin Project",
    comments:
      "I decided to complicate the game a bit by using The Big Bang Theory version of the game.",
    image: img7,
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Social Network",
    description:
      "A social network application that allows users to make posts, follow other users, and like posts.",
    sourceCode: "https://github.com/hiralinda/social-network",
    liveSite: "https://youtu.be/SPhftAeJhBU",
    course: "CS50 Web Programming with Python and JavaScript",
    comments:
      "In addition to the expected implementation, I also added a settings feature that allows users to customize the background color of the entire page according to their preferences.",
    image: img2,
    tags: ["Django", "Bootstrap5", "SQLite3"],
  },
  {
    title: "Email Client",
    description:
      "This project is a email client built using Django for the backend and JavaScript for the frontend.",
    sourceCode: "https://github.com/hiralinda/email-client",
    liveSite: "https://youtu.be/7ci0fyAInos",
    course: "CS50 Web Programming with Python and JavaScript",
    comments:
      "I got introduced to single-page application (SPA) formats and used JavaScript to implement the frontend functionality.",
    image: img1,
    tags: ["Django", "Bootstrap5", "SQLite3"],
  },
  {
    title: "Photo Portfolio Webpage",
    description:
      "An interface designed to showcase dynamic photography portfolios.",
    sourceCode:
      "https://github.com/hiralinda/Photo-Portfolio-CS50s-Final-Project?tab=readme-ov-file#photo-portifolio-webpage",
    liveSite: "https://youtu.be/LJGeUmB_FXk",
    course: "CS50’s Introduction to Computer Science",
    comments: "This project introduced me to python backend programming.",
    image: img3,
    tags: ["Flask", "SASS", "DarkMode", "SQLite3"],
  },
  {
    title: "Wiki Encyclopedia",
    description: "This project is a Wiki Encyclopedia built using Django.",
    sourceCode: "https://github.com/hiralinda/wiki-encyclopedia",
    liveSite: "https://youtu.be/o1lEu2gQYtY",
    course: "CS50 Web Programming with Python and JavaScript",
    comments:
      "I made use of the Markdown Python Library and implemented a Dark Mode feature.",
    image: img4,
    tags: ["Django", "Bootstrap5", "SQLite3, DarkMode"],
  },
  {
    title: "Bootstrap 5 Personal Homepage",
    description: "This is a mock personal homepage created with Bootstrap 5",
    sourceCode: "https://github.com/hiralinda/bootstrap-5-homepage",
    liveSite: "https://hiralinda.github.io/bootstrap-5-homepage/",
    course: "CS50's Introduction to Computer Science",
    comments: "I learned a lot about Bootstrap 5 and how to use it.",
    image: img5,
    tags: ["Bootstrap 5", "HTML", "CSS"],
  },
];

const MoreProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-extrabold mb-16 py-1 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
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
        <div className="text-center py-12">
          <motion.button
            onClick={handleGoBack}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mb-10 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-bold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
            Go Back
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default MoreProjects;
