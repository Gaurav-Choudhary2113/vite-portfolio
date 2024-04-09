import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start gap-7">
      <a
        href="https://www.linkedin.com/in/gaurav-choudhary-0a5218254/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin className="size-8" />
      </a>
      <a
        href="https://www.instagram.com/_gaurav17.4/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram className="size-8" />
      </a>
      <a
        href="https://github.com/Gaurav-Choudhary2113"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub className="size-8" />
      </a>
    </div>
  );
};
export default SocialMediaIcons;
