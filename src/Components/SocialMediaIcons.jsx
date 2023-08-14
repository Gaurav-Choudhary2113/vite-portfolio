const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/gaurav-choudhary-0a5218254/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="src/assets/linkedin.png" alt="linkedin-link" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/home"
        target="_blank"
        rel="noreferrer"
      >
        <img src="src/assets/twitter.png" alt="twitter-link" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="src/assets/instagram.png" alt="instagram-link" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="src/assets/facebook.png" alt="facebook-link" />
      </a>
    </div>
  );
};
export default SocialMediaIcons;
