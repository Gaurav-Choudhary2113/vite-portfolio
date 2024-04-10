import SocialMediaIcons from "../Components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-40 bg-[#050914] pt-5 border-t-2 border-[#c3d7db]">
      <div className="flex flex-col justify-center items-center  mx-20">
        <div className="md:flex my-4 justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-white">
            Gaurav Choudhary
          </p>
        </div>
        <SocialMediaIcons />
      </div>
    </footer>
  );
};

export default Footer;
