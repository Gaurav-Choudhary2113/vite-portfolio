import Navbar from "./Scenes/Navbar";
import DotGroup from "./Scenes/DotGroup";
import Landing from "./Scenes/Landing";
import MySkills from "./Scenes/MySkills";
import Projects from "./Scenes/Projects";
import Contact from "./Scenes/Contact";
import { useEffect, useState } from "react";
import LineGradient from "./Components/LineGradient";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [selectPage, setSelectPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectPage}
        setSelectedPage={setSelectPage}
      />
      <div className="w=5/6 mx-auto md:h-full">
        {isAboveMediumScreens && <DotGroup selectedPage={selectPage} />}
        <Landing setSelectedPage={setSelectPage} />
      </div>
      <LineGradient />
      <div className="w=5/6 mx-auto md:h-full">
        <MySkills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Projects />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Contact />
      </div>
    </div>
  );
}

export default App;
