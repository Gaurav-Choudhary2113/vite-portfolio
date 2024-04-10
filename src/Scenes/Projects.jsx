import { motion } from "framer-motion";
import PropTypes from "prop-types";
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, desc, imgsrc, linky }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-200
    bg-black z-30 flex flex-col justify-between items-center text-center p-8 text-white`;
  const projectTitle = imgsrc.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative m-3 border">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair mt-4 text-[#f9f9f9]">{title}</p>
        <p className="code">{desc}</p>
        <a
          href={linky}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 mb-3 bg-white text-black codesemi cursor-pointer hover:scale-105 active:scale-100"
        >
          View Project
        </a>
      </div>
      <img src={`/${projectTitle}.jpg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen pt-24 w-2/3 mx-auto">
      {/* HEADINGS */}
      <motion.div
        className="flex flex-col w-full justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="inter text-[#e3e3e3] font-semibold text-5xl">
            PROJECTS
          </p>
        </div>
        <p className="mb-20 mt-4 codesemi text-[#a9a9a9] text-lg">
          Focused on the experience, driven by the engineering.
        </p>
      </motion.div>

      {/* projects */}
      <div className="flex justify-center mx-auto">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Project
            imgsrc="Project 1"
            title="Clueminati"
            desc="A very interactive landing page. Used NextJs and Framer Motion"
            linky="https://clueminati23-landing-gaurav.vercel.app/"
          />
          <Project
            imgsrc="Project 2"
            title="Bolt 2.0"
            desc="Landing page and Portal for Bolt 2.0 hackathon"
            linky="https://bolt-landing-gaurav.vercel.app/"
          />
          <Project
            imgsrc="Project 3"
            title="Blog-Newsletter"
            desc="Developed a dynamic website featuring blog posts for engaging content consumption"
            linky="https://blog-website-gauravb9c6.vercel.app/"
          />
        </motion.div>
      </div>
    </section>
  );
};
Project.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  imgsrc: PropTypes.string.isRequired,
  linky: PropTypes.string.isRequired,
};
export default Projects;
