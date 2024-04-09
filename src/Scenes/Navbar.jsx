import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className={`w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-[60%]">
        {/*Desktop nav */}

        <div className="flex justify-between w-full items-center backdrop-blur-md bg-[#00000056] px-7 py-4 rounded-3xl">
          <h4 className="font-playfair text-2xl font-bold">Gaurav Choudhary</h4>
          <div className="flex code justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-5}
              className="hover:text-[#82ddfd] transition duration-400 text-base navbar-link cursor-pointer no-underline"
              style={{ transitionDelay: "1ms" }}
            >
              {" "}
              Home
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-5}
              className="hover:text-[#82ddfd] transition duration-400 text-base navbar-link cursor-pointer no-underline"
              style={{ transitionDelay: "1ms" }}
            >
              {" "}
              Skills
            </Link>
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
      </div>
    </nav>
  );
};

export default Navbar;
