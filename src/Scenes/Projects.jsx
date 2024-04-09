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

const Project = ({ title, desc }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative m-3">
      <div className={overlayStyles}>
        <p className="text-2xl inter">{title}</p>
        <p className="mt-7 code">{desc}</p>
      </div>
      <img src={`/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen mt-24 w-2/3 mx-auto">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5"
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
          <p className="inter font-semibold text-3xl">PROJECTS</p>
          <div className="flex justify-center mt-5"></div>
        </div>
        <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
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
          <Project title="Project 1" />
          <Project title="Project 2" />

          <Project title="Project 3" />
        </motion.div>
      </div>
    </section>
  );
};
Project.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
};
export default Projects;
