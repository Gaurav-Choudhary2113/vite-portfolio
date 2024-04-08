const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/gaurav-choudhary-0a5218254/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/linkedin.png" alt="linkedin-link" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/_gaurav17.4/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/instagram.png" alt="instagram-link" />
      </a>
      <a
        className="hover:opacity-50 transition duration-508 w-7"
        href="https://github.com/Gaurav-Choudhary2113"
        target="_blank"
        rel="noreferrer"
      >
        <img src="/github.png" alt="github-link" />
      </a>
    </div>
  );
};
export default SocialMediaIcons;
