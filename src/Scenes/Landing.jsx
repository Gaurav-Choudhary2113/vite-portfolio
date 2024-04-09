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
      className="md:flex md:justify-between md:items-center md:h-full gap-8 py-10 min-h-screen"
    >
      <div className="md:mx-64">
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
          <p className="h-8 ml-2">
            <TypingText texts={texts} speed={speed} delay={1000} />
          </p>
          <p className="inter text-7xl leading-12 font-playfair z-10 text-center md:text-start">
            Gaurav Choudhary.
          </p>
          <p className="inter text-6xl font-playfair z-10 text-center md:text-start text-[#ffffffa1]">
            Crafting Meaningful and Elegant Websites.
          </p>

          <p className="code mt-10 mb-7 md:px-0 text-md text-center md:text-start xs:text-center xs:px-12">
            A Front-End Developer and a Cyebr Security Enthusiast with a strong
            desire to learn and grow as a coder. Currently proficient in React
            and NextJS.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
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
