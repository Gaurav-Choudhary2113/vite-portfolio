import useMediaQuery from "../hooks/useMediaQuery";

import SocialMediaIcons from "../Components/SocialMediaIcons";
import { motion } from "framer-motion";

const Landing = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-8  py-10"
    >
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:-32 mx-5">
        {isAboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-[60%] before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-red before:z-[-1] "
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <img
                src="/profile-image.png"
                alt="profile"
                className="hover:filter hover: transition duration-500 z-10 w-[70%] max-w-[400px] md:max-w-[600px]"
              />
            </motion.div>
          </div>
        ) : (
          <img
            src="/profile-image.png"
            alt="profile"
            className="hover:filter hover:saturate-100 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
          />
        )}
      </div>

      <div className="z-30 basis-2/5 mt-12 md:mt-32 md:mx-28">
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
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Gaurav
            <div
              className="my-6 text-6xl xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-top-[40px] xs:before:justify-center xs:before:mx-[-120px] before:z-[-1]"
            >
              Choudhary
            </div>
          </p>

          <p className="mt-10 mb-7 md:px-0 text-md text-center md:text-start xs:text-center xs:px-12">
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
