import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../Components/SocialMediaIcons";
import { motion } from "framer-motion";

const Landing = ({ setSelectedPage }) => {
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
            <img
              src="/profile-image.png"
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-[70%] max-w-[400px] md:max-w-[600px]"
            />
          </div>
        ) : (
          <img
            src="/profile-image.png"
            alt="profile"
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
          />
        )}
      </div>
      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32 md:mx-28">
        {/* HEADINGS */}
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

          <p className="mt-10 mb-7 md:px-0 text-sm text-center md:text-start xs:text-center xs:px-12">
            Enthusiastic in front-end and back-end development with a strong
            desire to learn and grow as a coder. Currently proficient in React
            and NextJS.
          </p>
        </motion.div>
        {/* Call actions */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-y px-7 font-semibold hover:bg-blue hover:text-white transition duration-500 cursor-pointer"
            onClick={() => setSelectedPage("contact")}
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10 cursor-pointer">
              <div>Let's Talk</div>
            </div>
          </AnchorLink>
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
