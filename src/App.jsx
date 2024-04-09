import Navbar from "./Scenes/Navbar";
import Landing from "./Scenes/Landing";
// import MySkills from "./Scenes/MySkills";
import Projects from "./Scenes/Projects";
import Contact from "./Scenes/Contact";
import Footer from "./Scenes/Footer";
import { ReactLenis } from "@studio-freight/react-lenis";
function App() {
  return (
    <div className="app bg-deep-blue">
      <ReactLenis
        root
        options={{
          lerp: 0.1,
          duration: 1.5,
        }}
      >
        <Navbar />
        <Landing />
        {/* <MySkills /> */}
        <Projects />
        <Contact />
        <Footer />
      </ReactLenis>
    </div>
  );
}

export default App;
