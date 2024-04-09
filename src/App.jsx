import Navbar from "./Scenes/Navbar";
import Landing from "./Scenes/Landing";
import MySkills from "./Scenes/MySkills";
import Projects from "./Scenes/Projects";
import Contact from "./Scenes/Contact";
import Footer from "./Scenes/Footer";

function App() {
  return (
    <div className="app bg-deep-blue">
      <Navbar />
      <div className="w=5/6 mx-auto md:h-full">
        <Landing />
      </div>
      <div className="w=5/6 mx-auto md:h-full">
        <MySkills />
      </div>
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>
      <div className="w-5/6 mx-auto md:h-full">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
