import SocialMediaIcons from "../Components/SocialMediaIcons";
import { motion } from "framer-motion";
import TypingText from "../Components/TypingText";
const Landing = () => {
  const texts = [
    "Hello, my name is              ",
    "const Gaurav = ( name, passion ) => {              ",
  ];
  const speed = 50;
  return (
    <section
      id="home"
      className="flex md:justify-between md:items-center justify-center items-center h-screen"
    >
      <div className="md:mx-64 mx-10 sm:mx-20 mt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="h-8 ml-2 text-center md:text-left mb-5 sm:block hidden">
            <TypingText texts={texts} speed={speed} delay={1000} />
          </p>
          <p className="inter md:text-7xl text-4xl sm:text-5xl leading-12 z-10 text-center md:text-start">
            Gaurav Choudhary.
          </p>
          <p className="inter md:text-6xl sm:text-4xl text-3xl z-10 text-center md:text-start text-[#ffffffa1]">
            Crafting Meaningful and Elegant Websites.
          </p>

          <p className="code mt-10 mb-7 md:px-0 sm:text-md text-sm text-center md:text-start xs:text-center xs:px-12">
            A Front-End Developer and a Cyebr Security Enthusiast with a strong
            desire to learn and grow as a coder. Currently proficient in React
            and NextJS.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};
export default Landing;
