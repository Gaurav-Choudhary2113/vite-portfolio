import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const controls = useAnimation();
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 600 && scrollDirection !== "down") {
        setScrollDirection("down");
        controls.start({ opacity: 1, y: "-55%" });
      } else if (currentScrollY === 0 && scrollDirection !== "up") {
        setScrollDirection("up");
        controls.start({ opacity: 1, y: "0%" });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, scrollDirection]);

  return (
    <motion.nav
      initial={{ opacity: 1, y: "0%" }}
      animate={controls}
      className="w-full z-50 flex justify-center fixed top-0 my-6"
    >
      <div className="flex justify-between w-2/3 items-center backdrop-blur-md bg-[#00000074] px-7 py-4 rounded-3xl">
        <h4 className="font-playfair px-5 text-2xl font-bold">
          Gaurav Choudhary
        </h4>
        <div className="flex codesemi text-[#cfcfcf] justify-between gap-16 font-opensans text-sm font-semibold px-5">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-5}
            className="hover:text-[#82ddfd] transition duration-400 text-base navbar-link cursor-pointer no-underline"
            style={{ transitionDelay: "1ms" }}
          >
            {" "}
            About Me
          </Link>
          {/* <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-5}
            className="hover:text-[#82ddfd] transition duration-400 text-base navbar-link cursor-pointer no-underline"
            style={{ transitionDelay: "1ms" }}
          >
            {" "}
            Skills
          </Link> */}
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-5}
            className="hover:text-[#82ddfd] transition duration-400 text-base navbar-link cursor-pointer no-underline"
            style={{ transitionDelay: "1ms" }}
          >
            {" "}
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-5}
            className="hover:text-[#82ddfd] transition duration-400 text-base navbar-link cursor-pointer no-underline"
            style={{ transitionDelay: "1ms" }}
          >
            {" "}
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
